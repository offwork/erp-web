import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

/*
@Directive({
  selector: '[klNavDropdown]',
})

export class NavDropdownDirective {
  @HostBinding('class.before')
  @HostBinding('class.open')
  private _open: boolean = false;

  isOpen(): any {
    return this._open;
  }

  open(): void {
    this._open = true;
  }

  close(): void {
    this._open = false;
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close()
    } else {
      this.open()
    }
  }
}

@Directive({
  selector: '[klNavDropdownToggle]',
})

export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {}

  @HostListener('click', [ '$event' ])
  toggleOpen($event: any): void {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}
*/

@Directive({
  selector: '[klNavDropdown]'
})
export class NavDropdownDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click', ['$event'])
  toggle(event) {
    const target = $(event.target || event.srcElement || event.currentTarget);
    let ul, anchor = target;

    // find the UL
    if (!target.is('a')) {
      anchor = target.parent('a').first();
    }
    ul = anchor.next();
    const parentNav = ul.parents('.sidebar-subnav');
    $('.sidebar-subnav').each((idx, el) => {
      const $el = $(el);
      if (!$el.is(parentNav) && !$el.is(ul)) {
        this.closeMenu($el, this.el.nativeElement);
      }
    });

    if (!ul.length) {
      return;
    }

    ul.find('.sidebar-subnav').each((idx, el) => {
      this.closeMenu($(el),  this.el.nativeElement);
    });

    if (parseInt(ul.height(), 0)) {
      this.closeMenu(ul,  this.el.nativeElement);
    } else {
      ul.on('transitionend', () => {
        ul.height('auto').off('transitionend');
      }).height(ul[0].scrollHeight);
      ul.addClass('opening');
      this.el.nativeElement.classList.add('open');
    }
  }

  closeMenu(elem, el) {
    elem.height(elem[0].scrollHeight);
    elem.height(0);
    elem.removeClass('opening');
    elem[0].previousElementSibling.classList.remove('open');
    console.log('elem : ', elem[0].previousElementSibling.classList);
  }
}

/**
 * Allows the dropdown to be toggled via click.
 */
@Directive({
  selector: '[klMouseHover]'
})
export class NavDropdownToggleDirective {
  // Check if element has class
  private static hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  constructor(private router: Router, private el: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  toggleSubmenuHover(event) {

    const self = this;
    if(NavDropdownToggleDirective.hasClass(document.querySelector('body'), 'aside-collapsed')) {
      const isFixed = true;
      event.preventDefault();
      this.removeFloatingNav();
      const target = $(event.target || event.srcElement || event.currentTarget);
      let ul, anchor = target;
      if (!target.is('a')) {
        anchor = target.parent('a');
      }
      ul = anchor.next();
      if (!ul.length) {
        return;
      }
      const $aside = $('.aside');
      const $asideInner = $aside.children('.aside-inner'); // for top offset calculation
      const $sidebar = $asideInner.children('.sidebar');
      const mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0) + 55;
      const itemTop = ((anchor.parent().position().top) + mar) - $sidebar.scrollTop();

      const floatingNav = ul.clone().appendTo($aside);
      const vwHeight = $(window).height();

      floatingNav
        .removeClass('opening')
        .addClass('nav-floating')
        .css({
          position: isFixed ? 'fixed' : 'absolute',
          top: itemTop,
          bottom: (floatingNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
        });
      floatingNav
        .find('a').on('click', function (e) {
        const $subNav = e.currentTarget.parentElement.children;
        if ($subNav.length > 1) {
          const subTarget = $(e.target || e.srcElement || e.currentTarget);
          let subUl, subAnchor = subTarget;
          if (!subTarget.is('a')) {
            subAnchor = subTarget.parent('a').first();
          }
          subUl = subAnchor.next();
          const parentSubNav = subUl.parents('.sidebar-subnav');
          $('.sidebar-subnav').each((idxx, elSub) => {
            const $elSub = $(elSub);
            if (!$elSub.is(parentSubNav) && !$elSub.is(subUl)) {
              $elSub.height($elSub[0].scrollHeight);
              $elSub.height(0);
              $elSub.removeClass('opening');
              $elSub[0].previousElementSibling.classList.remove('open');
            }
          });
          if (!subUl.length) {
            return;
          }
          subUl.find('.sidebar-subnav').each((idxx, elSub) => {
            const $elSub = $(elSub);
            $elSub.height($elSub[0].scrollHeight);
            $elSub.height(0);
            $elSub.removeClass('opening');
            $elSub[0].previousElementSibling.classList.remove('open');
          });
          if (parseInt(subUl.height(), 0)) {
            subUl.height(subUl[0].scrollHeight);
            subUl.height(0);
            subUl.removeClass('opening');
            subUl[0].previousElementSibling.classList.remove('open');
          } else {
            subUl.on('transitionend', () => {
              subUl.height('auto').off('transitionend');
            }).height(subUl[0].scrollHeight);
            subUl.addClass('opening');
            e.currentTarget.classList.add('open');
          }
        } else {
          e.preventDefault();
          //self.router.navigate([$(this).attr('route')]);
        }
      });
      this.listenForExternalClicks();
    }
  }
  listenForExternalClicks() {
    const $doc = $(document).on('click.sidebar', (e) => {
      if (!$(e.target).parents('.aside').length) {
        this.removeFloatingNav();
        $doc.off('click.sidebar');
      }
    });
  }
  removeFloatingNav() {
    $('.nav-floating').remove();
  }
}
