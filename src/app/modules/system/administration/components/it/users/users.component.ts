import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { BsModalService }     from 'ngx-bootstrap/modal';
import { BsModalRef }         from 'ngx-bootstrap/modal/modal-options.class';

import { Subscription }       from 'rxjs/Subscription';
import { AddComponent }       from '../../../add.component';
import { SystemAdminService } from '../../../services/system-admin.service';
import { UIService }          from "../../../../../../core/ui/services/ui.service";

import * as wjcGridPdf        from 'wijmo/wijmo.grid.pdf';
import * as wjcPdf            from 'wijmo/wijmo.pdf';
import * as wjcCore           from 'wijmo/wijmo';
import * as wjcGrid           from 'wijmo/wijmo.grid';
import * as wjcGridFilter     from 'wijmo/wijmo.grid.filter';
import * as wjcXlsx           from 'wijmo/wijmo.xlsx';
import * as wjcGridXlsx       from 'wijmo/wijmo.grid.xlsx';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit, AddComponent {

  @Input() public data            : any;
  @ViewChild('filter') filter     : wjcGridFilter.FlexGridFilter;
  @ViewChild('flexGrid') flexGrid : wjcGrid.FlexGrid;

  // Reference enumerations to use them in markup.
  public exportMode               = wjcGridPdf.ExportMode.All;
  public orientation              = wjcPdf.PdfPageOrientation.Portrait;
  public scaleMode                = wjcGridPdf.ScaleMode.ActualSize;
  public allUsers                 : wjcCore.CollectionView;

  private requestSubscription     : Subscription;
  // Paging
  public totalItems               : number;
  public currentIndex             : number = 1;
  public maxSize                  : number;

  // User API
  public currentUserRow           : any;
  public currentCopyUser          : any;
  public addUserRow               : any;
  public fieldNames               : string[];
  public modalOperationNumber     : number;
  public modalRef                 : BsModalRef;
  public users;

  constructor(
    private systemAdminService: SystemAdminService,
    private modalService: BsModalService,
    public uiService: UIService) {}

  ngOnInit() { this.getAllUsers(); }

  private getAllUsers() {
    this.addUserRow     = {
      email             : '',
      fullName          : '',
      localization      : 'tr_TR',
      password          : '',
      passwordExpired   : new Date(Date.now()),
      username          : ''
    };

    this.requestSubscription = this.systemAdminService
      .getAllUsers()
      .subscribe(
        (res) => {
          this.users = res['body'];
         },
        err => {
          let options = err.hasOwnProperty('status') ?
            { title: 'Zaman Aşımı', text: 'Bu istek zaman aşımına uğradı!' } :
            { title: 'Bilinmeyen Hata', text: `${err}` };
          this.uiService.alertError(
            options,
            () => {
              this.getAllUsers();
            },
            () => {
              this.requestSubscription.unsubscribe();
            })
        },
        () => {
          this.initialUsersGrid();
        }
      );
  }

  private initialUsersGrid() {
    this.fieldNames         = ['id', 'status', 'username'];
    this.allUsers           = new wjcCore.CollectionView(this.users.data);
    this.currentUserRow     = this.allUsers.items[0];
    this.currentCopyUser    = this.allUsers.items[0];
    this.allUsers.pageSize  = 10;
    this.totalItems         = this.allUsers.totalItemCount ? this.allUsers.totalItemCount : 0;
    this.maxSize            = this.allUsers.pageSize;

    this.allUsers.currentChanged.addHandler(() => {
      this.currentUserRow = Object.assign({},this.allUsers.currentItem);
      this.currentCopyUser = Object.assign({}, this.allUsers.currentItem);
    });

    this.flexGrid.refresh(true);
  }

  public menuItemClicked(idx, template: TemplateRef<any>) {
    if ( idx === 2 ) {
      if ( this.currentUserRow.hasOwnProperty('id') ) {
        this.systemAdminService
          .removeUser(this.currentUserRow.id)
          .subscribe(
            (res) => {
              if ( res['status'] === 200 ) {
                this.uiService.toastSuccess('Başarılı', `${this.currentUserRow.username} kullanıcısı silindi!`);
              }
            },
            (err) => {
              this.uiService.alertError(
                { title: 'İşlem başarısız', text: 'bu kullanıcı olmayabilir!' },
                (()=>{}),
                (()=>{}));
            },
            () => {
              this.getAllUsers();
            }
          );
      }
    }

    this.modalOperationNumber = idx;
    this.openModal(template);
  }

  public callUserApi(action) {
    if( action === 'save' ) {
      this.systemAdminService
        .updateUser(this.currentUserRow)
        .subscribe(
          (res: any) => {
            if ( res['status'] === 200 ) {
              this.uiService.toastSuccess('Başarılı', `${this.currentUserRow.username} kullanıcısı güncellendi!`);
            }
          },
          (err: any) => {
            this.modalRef.hide();
            const error =  JSON.parse(err['error']);
            this.uiService.alertError(
              { title: `${error.outcomeType}`, text: `${error.uimessage[0].text}` },
              (()=>{}),
              (()=>{}));
          },
          () => {
            this.modalRef.hide();
            this.getAllUsers();
          }
        );
    }

    if (action === 'add') {
      this.systemAdminService
        .addUser(this.addUserRow)
        .subscribe(
          (res) => {
            if ( res['status'] === 200 ) {
              this.uiService.toastSuccess('Başarılı', `${this.addUserRow.username} kullanıcısı eklendi!`);
            }
          },
          (err) => {
            this.modalRef.hide();
            const error = Object.assign({}, err);
            this.uiService.alertError(
              { title: 'İşlem başarısız', text: 'kullanıcı adı yanlış olabilir!' },
              (()=>{}),
              (()=>{}));
          },
          () => {
            this.modalRef.hide();
            this.getAllUsers();
          }
        );
    }
  }

  public pageChanged(event: any): void {
    this.allUsers.moveToPage(event.page - 1);
  }

  public openModal(template: TemplateRef<any>) {
    if ( this.modalOperationNumber ===  2) return;
    /*TODO: you're consider compare to objects equal*/
    if (this.modalOperationNumber !== -1) {
      if (this.currentCopyUser.email !== this.currentUserRow.email ||
        this.currentCopyUser.fullName !== this.currentUserRow.fullName ||
        this.currentCopyUser.username !== this.currentUserRow.username) {
        this.currentUserRow =  this.currentCopyUser;
      }
    }

    this.modalRef = this.modalService.show(template);
  }

  public clickExportToExcel() {
    wjcGridXlsx.FlexGridXlsxConverter.saveAsync(this.flexGrid, {
      includeColumnHeaders: true,
      includeCellStyles: false,
      formatItem: UsersComponent.exportFormatItem
    }, 'FlexGrid.xlsx');
  }

  public clickExportToPdf() {
    wjcGridPdf.FlexGridPdfConverter.export(this.flexGrid, 'FlexGrid.pdf', {
      maxPages: 10,
      exportMode: this.exportMode,
      scaleMode: this.scaleMode,
      documentOptions: {
        pageSettings: {
          layout: this.orientation
        },
        header: {
          declarative: {
            text: '\t&[Page]\\&[Pages]'
          }
        },
        footer: {
          declarative: {
            text: '\t&[Page]\\&[Pages]'
          }
        },
        info: {
          author: 'C1',
          title: 'PdfDocument sample',
          subject: 'PdfDocument'
        }
      },
      styles: {
        cellStyle: {
          backgroundColor: '#ffffff',
          borderColor: '#c6c6c6'
        },
        altCellStyle: {
          backgroundColor: '#f9f9f9',
        },
        groupCellStyle: {
          backgroundColor: '#dddddd',
        },
        headerCellStyle: {
          backgroundColor: '#eaeaea',
        },
      }
    });
  }

  static exportFormatItem(args: wjcGridXlsx.XlsxFormatItemEventArgs) {
    const p = args.panel,
      row = args.row,
      col = args.col,
      xlsxCell = args.xlsxCell;
    let cell: HTMLElement;

    if (p.cellType === wjcGrid.CellType.Cell) {
      if (p.columns[col].binding === 'color') {
        if (xlsxCell.value) {
          if (!xlsxCell.style.font) {
            xlsxCell.style.font = {};
          }
          xlsxCell.style.font.color = (<string>xlsxCell.value).toLowerCase();
        }
      } else if (p.columns[col].binding === 'active' && p.rows[row] instanceof wjcGrid.GroupRow) {
        cell = args.getFormattedCell();
        xlsxCell.value = cell.textContent.trim();
        xlsxCell.style.hAlign = wjcXlsx.HAlign.Left;
      }
    }
  }
}
