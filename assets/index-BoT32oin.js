const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editor.main-GPJj86Ab.js","./index-D0OV-lQ9.js","./index-CKWTnSqQ.css","./editor-yqdkhaTi.css"])))=>i.map(i=>d[i]);
var to=Object.getPrototypeOf;var oo=Reflect.get;var et=(i,e,t)=>oo(to(i),t,e);import{i as _t,A as Tt,m as _,b as A,a as j,a0 as tt,e as W,ax as Ee,c as ke,n as w,ay as je,t as qe,a3 as io,I as ro,g as Fe,a4 as no,$ as so,r as pe,s as Re}from"./index-D0OV-lQ9.js";import{$ as ao}from"./index-BnITaov3.js";import"./index-DJ1oH1xV.js";const co=_t`
  :host {
    display: inline-block;
  }

  /*
   * Collapsible group items container.
   * max-width handles horizontal (inline-expand, Pattern 2).
   * max-height handles vertical (accordion, Pattern 3).
   * Both axes animate together so one class works for both orientations.
   */
  .toolbar-group-items {
    transition:
      max-width 0.25s ease,
      max-height 0.25s ease,
      opacity 0.2s ease 0.05s;
  }
  /*
   * overflow:hidden only during collapse so the max-width/max-height animation
   * clips the shrinking content. When expanded, overflow is visible so that
   * DaisyUI tooltip pseudo-elements (position:absolute) are not clipped.
   */
  .toolbar-group-items[data-collapsed] {
    overflow: hidden;
    max-width: 0;
    max-height: 0;
    opacity: 0;
    transition:
      max-width 0.25s ease,
      max-height 0.25s ease,
      opacity 0.15s ease;
  }
  .toolbar-group-items:not([data-collapsed]) {
    overflow: visible;
    max-width: 9999px;
    max-height: 9999px;
    opacity: 1;
  }
`;class lo{constructor(e){this._keydownHandler=null,this._outsideClickHandler=null,this.overflowOpen=!1,this._collapsedGroups=new Map,this.host=e,e.addController(this)}hostConnected(){this._keydownHandler=this._handleKeydown.bind(this),this._outsideClickHandler=this._handleOutsideClick.bind(this),this.host.addEventListener("keydown",this._keydownHandler),document.addEventListener("click",this._outsideClickHandler)}hostDisconnected(){this._keydownHandler&&(this.host.removeEventListener("keydown",this._keydownHandler),this._keydownHandler=null),this._outsideClickHandler&&(document.removeEventListener("click",this._outsideClickHandler),this._outsideClickHandler=null)}_handleKeydown(e){if(e.key==="Escape"&&this.overflowOpen){this.closeOverflow(),e.preventDefault();return}const t=Array.from(this.host.renderRoot.querySelectorAll("button:not([disabled])"));if(t.length===0)return;const r=e.composedPath().find(d=>d instanceof HTMLButtonElement),n=r?t.indexOf(r):-1;if(n===-1)return;const s=this.host.orientation!=="vertical";let a=n;if(e.key===(s?"ArrowRight":"ArrowDown"))a=(n+1)%t.length;else if(e.key===(s?"ArrowLeft":"ArrowUp"))a=(n-1+t.length)%t.length;else if(e.key==="Home")a=0;else if(e.key==="End")a=t.length-1;else return;e.preventDefault(),t.forEach((d,c)=>d.setAttribute("tabindex",c===a?"0":"-1")),t[a]?.focus()}_handleOutsideClick(e){this.host.contains(e.target)||this.closeOverflow()}initCollapsedState(e){for(const t of e)t.collapsible&&!this._collapsedGroups.has(t.id)&&this._collapsedGroups.set(t.id,t.defaultCollapsed??!1)}isCollapsed(e,t=!1){return this._collapsedGroups.get(e)??t}handleGroupToggle(e){const t=!this.isCollapsed(e.id,e.defaultCollapsed);this._collapsedGroups.set(e.id,t);const o={groupId:e.id,collapsed:t,group:e};this.host.dispatchEvent(new CustomEvent("aiux-toolbar:group-toggled",{detail:o,bubbles:!0,composed:!0})),this.host.requestUpdate()}getVisibleGroups(e,t){return t===0||e.length<=t?e:e.slice(0,t)}getOverflowGroups(e,t){return t===0||e.length<=t?[]:e.slice(t)}toggleOverflow(){this.overflowOpen=!this.overflowOpen,this.host.requestUpdate()}closeOverflow(){this.overflowOpen&&(this.overflowOpen=!1,this.host.requestUpdate())}handleItemClick(e,t){const o=e.type??"action";if(!(e.disabled||o==="separator"))if(o==="toggle"){const r={itemId:e.id,groupId:t.id,item:e,active:!e.active};this.host.dispatchEvent(new CustomEvent("aiux-toolbar:item-toggled",{detail:r,bubbles:!0,composed:!0}))}else{const r={itemId:e.id,groupId:t.id,item:e};this.host.dispatchEvent(new CustomEvent("aiux-toolbar:item-clicked",{detail:r,bubbles:!0,composed:!0}))}}}function z(i,e,t,o){var r=arguments.length,n=r<3?e:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}const Ze=class Ze extends Tt{connectedCallback(){super.connectedCallback(),this._controller.initCollapsedState(this.groups)}updated(e){e.has("groups")&&this._controller.initCollapsedState(this.groups)}get _btnSizeClass(){return{sm:"btn-xs",md:"btn-sm",lg:"btn-md"}[this.configSize??this.size]}get _iconSize(){return{sm:"xs",md:"sm",lg:"md"}[this.configSize??this.size]}get _tooltipPositions(){const e=this.configTooltipPlacement??this.tooltipPlacement,t=this.orientation,o={top:"top-center",bottom:"bottom-center",left:"center-start",right:"center-end"},r={top:["bottom-center","center-end","center-start"],bottom:["top-center","center-end","center-start"],left:["center-end","bottom-center","top-center"],right:["center-start","bottom-center","top-center"]};return e!=="auto"?[o[e]??"bottom-center",...r[e]??["top-center","center-end","center-start"]]:t==="vertical"?["center-end","center-start","bottom-center","top-center"]:["bottom-center","top-center","center-end","center-start"]}get _toolbarAriaLabel(){return this.ariaLabel||_("Toolbar",{desc:"Default accessible label for the toolbar landmark region"})}_groupToggleAriaLabel(e){return e.label?e.label:_("Toggle group",{desc:"Default accessible label for a collapsible toolbar group trigger button"})}_renderGroupDivider(){const e=this.orientation==="vertical";return A`
      <div
        aria-hidden="true"
        class=${e?"h-px w-6 bg-base-300 my-0.5 self-center":"w-px h-5 bg-base-300 mx-0.5 self-center"}
      ></div>
    `}_renderItemSeparator(){const e=this.orientation==="vertical";return A`
      <div
        role="separator"
        aria-orientation=${e?"horizontal":"vertical"}
        class=${e?"h-px w-5 bg-base-300 my-0.5 self-center":"w-px h-4 bg-base-300 mx-0.5 self-center"}
      ></div>
    `}_renderItem(e,t,o,r=!1){const n=e.type??"action";if(n==="separator")return this._renderItemSeparator();const s=!!e.icon&&!e.label,a=e.active??!1,d=e.disabled??!1,c=e.tooltip??e.label??e.ariaLabel??"",u=e.ariaLabel??e.tooltip??e.label??_("Toolbar action",{desc:"Fallback accessible label for a toolbar item with no icon label, tooltip, or explicit aria-label"}),g=e.id===o;return A`
      <button
        role=${tt(r?"menuitem":void 0)}
        class=${W({btn:!0,"btn-ghost":!0,[this._btnSizeClass]:!0,"btn-square":s,"btn-active":a,"bg-base-300":a,"opacity-40":d,"gap-0.5":!!(e.icon&&e.label)})}
        aria-label=${u}
        aria-pressed=${tt(n==="toggle"?String(a):void 0)}
        ?disabled=${d}
        tabindex=${!d&&g?0:-1}
        data-group-id=${t.id}
        data-item-id=${e.id}
        @click=${this._handleItemClick}
        ${Ee({content:c,positions:this._tooltipPositions,hideDelay:100,root:this.shadowRoot??void 0})}
      >
        ${e.icon?ke({name:e.icon,size:this._iconSize}):j}
        ${e.label?A`<span>${e.label}</span>`:j}
      </button>
    `}_renderCollapsibleTrigger(e,t,o){const r=`toolbar-items-${e.id}`,n=`__group__${e.id}`===o,s=e.icon??"list",a=e.label??"",d=this.orientation;return A`
      <button
        class=${W({btn:!0,"btn-ghost":!0,[this._btnSizeClass]:!0,"gap-0.5":!0})}
        aria-label=${this._groupToggleAriaLabel(e)}
        aria-expanded=${t?"false":"true"}
        aria-controls=${r}
        tabindex=${n?0:-1}
        data-group-id=${e.id}
        @click=${this._handleGroupToggle}
        ${Ee({content:a,positions:this._tooltipPositions,hideDelay:100,root:this.shadowRoot??void 0})}
      >
        ${ke({name:s,size:this._iconSize})}
        ${ke({name:d==="vertical"?"chevron-down":"chevron-right",size:this._iconSize,class:t?"transition-transform duration-200":"rotate-180 transition-transform duration-200"})}
      </button>
    `}_renderGroup(e,t){const o=this.orientation==="vertical";if(e.collapsible){const r=this._controller.isCollapsed(e.id,e.defaultCollapsed),n=`toolbar-items-${e.id}`;return A`
        <div
          class=${W({"flex gap-0.5":!0,"flex-col":o,"items-center":!o})}
        >
          ${this._renderCollapsibleTrigger(e,r,t)}
          <div
            id=${n}
            class=${W({"toolbar-group-items":!0,"flex items-center gap-1":!0,"flex-col":o})}
            ?data-collapsed=${r}
            aria-hidden=${r?"true":"false"}
          >
            ${e.items.map(s=>this._renderItem(s,e,t))}
          </div>
        </div>
      `}return A`
      <div class="flex flex-col gap-0.5">
        ${e.label?A`
                <span
                  class="text-[8px] font-medium uppercase tracking-widest text-base-content/40 px-1 leading-none whitespace-nowrap text-center"
                >
                  ${e.label}
                </span>
              `:j}
        <div
          class=${W({"flex items-center gap-1":!0,"flex-col":o})}
        >
          ${e.items.map(r=>this._renderItem(r,e,t))}
        </div>
      </div>
    `}_renderOverflowMenu(e,t){return this._controller.overflowOpen?A`
      <div
        class="absolute bottom-full mb-1 right-0 z-50 flex flex-col gap-1 p-1.5 bg-base-100 border border-base-200 rounded-lg shadow-lg min-w-max"
        role="menu"
        aria-label=${_("More actions",{desc:"Label for the overflow menu that shows additional toolbar actions"})}
      >
        ${e.map((o,r)=>A`
            ${r>0?A`<div aria-hidden="true" class="h-px bg-base-300 mx-1"></div>`:j}
            ${o.label?A`
                    <span
                      class="text-[8px] font-medium uppercase tracking-widest text-base-content/40 px-1.5 pt-0.5 leading-none whitespace-nowrap"
                    >
                      ${o.label}
                    </span>
                  `:j}
            <div class="flex items-center flex-wrap gap-0.5" role="group">
              ${o.items.map(n=>this._renderItem(n,o,t,!0))}
            </div>
          `)}
      </div>
    `:j}_firstFocusableId(e){for(const t of e){if(t.collapsible)return`__group__${t.id}`;for(const o of t.items){const r=o.type??"action";if(!o.disabled&&r!=="separator")return o.id}}return""}render(){const e=this.configMaxVisible??this.maxVisible,t=this.orientation,o=this._controller.getVisibleGroups(this.groups,e),r=this._controller.getOverflowGroups(this.groups,e),n=r.length>0,s=t==="vertical",a=this._controller.overflowOpen?"true":"false",d=this._firstFocusableId([...o,...r]),c=d===""?0:-1;return A`
      <div
        role="toolbar"
        aria-label=${this._toolbarAriaLabel}
        aria-orientation=${t}
        class=${W({"flex items-center gap-0.5 p-1 rounded-lg":!0,"flex-col":s,"bg-base-100 border border-solid border-base-content/20 shadow-sm":!0,relative:n})}
      >
        ${o.map((u,g)=>A`
            ${g>0?this._renderGroupDivider():j}
            ${this._renderGroup(u,d)}
          `)}
        ${n?A`
                <div class="relative">
                  <button
                    class=${W({"btn btn-ghost btn-square":!0,[this._btnSizeClass]:!0})}
                    aria-label=${_("More actions",{desc:"Label for the overflow menu that shows additional toolbar actions"})}
                    aria-haspopup="true"
                    aria-expanded=${a}
                    tabindex=${c}
                    @click=${this._handleOverflowToggle}
                    ${Ee({content:_("More actions",{desc:"Label for the overflow menu that shows additional toolbar actions"}),positions:["bottom-center","top-center","center-end","center-start"],hideDelay:100,root:this.shadowRoot??void 0})}
                  >
                    <span aria-hidden="true" class="text-base font-bold tracking-tighter">···</span>
                  </button>
                  ${this._renderOverflowMenu(r,d)}
                </div>
              `:j}
      </div>
    `}constructor(...e){super(...e),this.groups=[],this.orientation="horizontal",this.size="md",this.ariaLabel="",this.maxVisible=0,this.tooltipPlacement="auto",this._controller=new lo(this),this._handleItemClick=t=>{t.stopPropagation();const o=t.currentTarget,r=this.groups.find(s=>s.id===o.dataset.groupId),n=r?.items.find(s=>s.id===o.dataset.itemId);r&&n&&this._controller.handleItemClick(n,r)},this._handleGroupToggle=t=>{t.stopPropagation();const o=t.currentTarget,r=this.groups.find(n=>n.id===o.dataset.groupId);r&&this._controller.handleGroupToggle(r)},this._handleOverflowToggle=t=>{t.stopPropagation(),this._controller.toggleOverflow()}}};Ze.styles=co;let O=Ze;z([w({type:Array})],O.prototype,"groups",void 0);z([w({type:String})],O.prototype,"orientation",void 0);z([w({type:String})],O.prototype,"size",void 0);z([je({label:_("Size",{desc:"Config Editor label for the Size option on the toolbar"}),description:_("Button / icon size token: sm | md | lg.",{desc:"Config Editor help text for the Size option on the toolbar"}),choices:[{value:"sm",label:_("Small",{desc:"Toolbar Size config option: small button/icon size"})},{value:"md",label:_("Medium",{desc:"Toolbar Size config option: medium button/icon size"})},{value:"lg",label:_("Large",{desc:"Toolbar Size config option: large button/icon size"})}],type:String})],O.prototype,"configSize",void 0);z([w({attribute:"aria-label",type:String})],O.prototype,"ariaLabel",void 0);z([w({type:Number})],O.prototype,"maxVisible",void 0);z([je({label:_("Max Visible",{desc:"Config Editor label for the Max Visible option on the toolbar"}),description:_("Max groups shown inline; 0 = show all.",{desc:"Config Editor help text for the Max Visible option on the toolbar"}),type:Number})],O.prototype,"configMaxVisible",void 0);z([w({type:String})],O.prototype,"tooltipPlacement",void 0);z([je({label:_("Tooltip Placement",{desc:"Config Editor label for the Tooltip Placement option on the toolbar"}),description:_("Controls which side item tooltips open toward.",{desc:"Config Editor help text for the Tooltip Placement option on the toolbar"}),choices:[{value:"auto",label:_("Auto",{desc:"Toolbar Tooltip Placement config option: automatically choose the best side"})},{value:"top",label:_("Top",{desc:"Toolbar Tooltip Placement config option: open above the item"})},{value:"bottom",label:_("Bottom",{desc:"Toolbar Tooltip Placement config option: open below the item"})},{value:"left",label:_("Left",{desc:"Toolbar Tooltip Placement config option: open to the left of the item"})},{value:"right",label:_("Right",{desc:"Toolbar Tooltip Placement config option: open to the right of the item"})}],type:String})],O.prototype,"configTooltipPlacement",void 0);O=z([qe("aiux-toolbar")],O);const ho=".monaco-action-bar{white-space:nowrap;height:100%}.monaco-action-bar .actions-container{display:flex;margin:0 auto;padding:0;height:100%;width:100%;align-items:center}.monaco-action-bar.vertical .actions-container{display:inline-block}.monaco-action-bar .action-item{display:block;align-items:center;justify-content:center;cursor:pointer;position:relative}.monaco-action-bar .action-item.disabled{cursor:default}.monaco-action-bar .action-item .codicon,.monaco-action-bar .action-item .icon{display:block}.monaco-action-bar .action-item .codicon{display:flex;align-items:center;width:16px;height:16px}.monaco-action-bar .action-label{display:flex;font-size:11px;padding:3px;border-radius:5px}.monaco-action-bar .action-item.disabled .action-label,.monaco-action-bar .action-item.disabled .action-label:before,.monaco-action-bar .action-item.disabled .action-label:hover{opacity:.6}.monaco-action-bar.vertical{text-align:left}.monaco-action-bar.vertical .action-item{display:block}.monaco-action-bar.vertical .action-label.separator{display:block;border-bottom:1px solid #bbb;padding-top:1px;margin-left:.8em;margin-right:.8em}.monaco-action-bar .action-item .action-label.separator{width:1px;height:16px;margin:5px 4px!important;cursor:default;min-width:1px;padding:0;background-color:#bbb}.secondary-actions .monaco-action-bar .action-label{margin-left:6px}.monaco-action-bar .action-item.select-container{overflow:hidden;flex:1;max-width:170px;min-width:60px;display:flex;align-items:center;justify-content:center;margin-right:10px}.monaco-action-bar .action-item.action-dropdown-item{display:flex}.monaco-action-bar .action-item.action-dropdown-item>.action-dropdown-item-separator{display:flex;align-items:center;cursor:default}.monaco-action-bar .action-item.action-dropdown-item>.action-dropdown-item-separator>div{width:1px}.monaco-aria-container{position:absolute;left:-999em}.monaco-text-button{box-sizing:border-box;display:flex;width:100%;padding:4px;border-radius:2px;text-align:center;cursor:pointer;justify-content:center;align-items:center;border:1px solid var(--vscode-button-border,transparent);line-height:18px}.monaco-text-button:focus{outline-offset:2px!important}.monaco-text-button:hover{text-decoration:none!important}.monaco-button.disabled,.monaco-button.disabled:focus{opacity:.4!important;cursor:default}.monaco-text-button .codicon{margin:0 .2em;color:inherit!important}.monaco-text-button.monaco-text-button-with-short-label{flex-direction:row;flex-wrap:wrap;padding:0 4px;overflow:hidden;height:28px}.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label{flex-basis:100%}.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label-short{flex-grow:1;width:0;overflow:hidden}.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label,.monaco-text-button.monaco-text-button-with-short-label>.monaco-button-label-short{display:flex;justify-content:center;align-items:center;font-weight:400;font-style:inherit;padding:4px 0}.monaco-button-dropdown{display:flex;cursor:pointer}.monaco-button-dropdown.disabled{cursor:default}.monaco-button-dropdown>.monaco-button:focus{outline-offset:-1px!important}.monaco-button-dropdown.disabled>.monaco-button-dropdown-separator,.monaco-button-dropdown.disabled>.monaco-button.disabled,.monaco-button-dropdown.disabled>.monaco-button.disabled:focus{opacity:.4!important}.monaco-button-dropdown>.monaco-button.monaco-text-button{border-right-width:0!important}.monaco-button-dropdown .monaco-button-dropdown-separator{padding:4px 0;cursor:default}.monaco-button-dropdown .monaco-button-dropdown-separator>div{height:100%;width:1px}.monaco-button-dropdown>.monaco-button.monaco-dropdown-button{border:1px solid var(--vscode-button-border,transparent);border-left-width:0!important;border-radius:0 2px 2px 0}.monaco-button-dropdown>.monaco-button.monaco-text-button{border-radius:2px 0 0 2px}.monaco-description-button{display:flex;flex-direction:column;align-items:center;margin:4px 5px}.monaco-description-button .monaco-button-description{font-style:italic;font-size:11px;padding:4px 20px}.monaco-description-button .monaco-button-description,.monaco-description-button .monaco-button-label{display:flex;justify-content:center;align-items:center}.monaco-description-button .monaco-button-description>.codicon,.monaco-description-button .monaco-button-label>.codicon{margin:0 .2em;color:inherit!important}@font-face{font-family:codicon;font-display:block;src:url("+new URL("codicon-D011ML1g.ttf",import.meta.url).href+') format("truetype")}.codicon[class*=codicon-]{font: 16px/1 codicon;display:inline-block;text-decoration:none;text-rendering:auto;text-align:center;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;user-select:none;-webkit-user-select:none}.codicon-wrench-subaction{opacity:.5}@keyframes codicon-spin{to{transform:rotate(1turn)}}.codicon-gear.codicon-modifier-spin,.codicon-loading.codicon-modifier-spin,.codicon-notebook-state-executing.codicon-modifier-spin,.codicon-sync.codicon-modifier-spin{animation:codicon-spin 1.5s steps(30) infinite}.codicon-modifier-disabled{opacity:.4}.codicon-loading,.codicon-tree-item-loading:before{animation-duration:1s!important;animation-timing-function:cubic-bezier(.53,.21,.29,.67)!important}.context-view{position:absolute}.context-view.fixed{all:initial;font-family:inherit;font-size:13px;position:fixed;color:inherit}.monaco-count-badge{padding:3px 6px;border-radius:11px;font-size:11px;min-width:18px;min-height:18px;line-height:11px;font-weight:400;text-align:center;display:inline-block;box-sizing:border-box}.monaco-count-badge.long{padding:2px 3px;border-radius:2px;min-height:auto;line-height:normal}.monaco-dropdown{height:100%;padding:0}.monaco-dropdown>.dropdown-label{cursor:pointer;height:100%;display:flex;align-items:center;justify-content:center}.monaco-dropdown>.dropdown-label>.action-label.disabled{cursor:default}.monaco-dropdown-with-primary{display:flex!important;flex-direction:row;border-radius:5px}.monaco-dropdown-with-primary>.action-container>.action-label{margin-right:0}.monaco-dropdown-with-primary>.dropdown-action-container>.monaco-dropdown>.dropdown-label .codicon[class*=codicon-]{font-size:12px;padding-left:0;padding-right:0;line-height:16px;margin-left:-3px}.monaco-dropdown-with-primary>.dropdown-action-container>.monaco-dropdown>.dropdown-label>.action-label{display:block;background-size:16px;background-position:50%;background-repeat:no-repeat}.monaco-findInput{position:relative}.monaco-findInput .monaco-inputbox{font-size:13px;width:100%}.monaco-findInput>.controls{position:absolute;top:3px;right:2px}.vs .monaco-findInput.disabled{background-color:#e1e1e1}.vs-dark .monaco-findInput.disabled{background-color:#333}.hc-light .monaco-findInput.highlight-0 .controls,.monaco-findInput.highlight-0 .controls{animation:monaco-findInput-highlight-0 .1s linear 0s}.hc-light .monaco-findInput.highlight-1 .controls,.monaco-findInput.highlight-1 .controls{animation:monaco-findInput-highlight-1 .1s linear 0s}.hc-black .monaco-findInput.highlight-0 .controls,.vs-dark .monaco-findInput.highlight-0 .controls{animation:monaco-findInput-highlight-dark-0 .1s linear 0s}.hc-black .monaco-findInput.highlight-1 .controls,.vs-dark .monaco-findInput.highlight-1 .controls{animation:monaco-findInput-highlight-dark-1 .1s linear 0s}@keyframes monaco-findInput-highlight-0{0%{background:#fdff00cc}to{background:transparent}}@keyframes monaco-findInput-highlight-1{0%{background:#fdff00cc}99%{background:transparent}}@keyframes monaco-findInput-highlight-dark-0{0%{background:#ffffff70}to{background:transparent}}@keyframes monaco-findInput-highlight-dark-1{0%{background:#ffffff70}99%{background:transparent}}.monaco-hover{cursor:default;position:absolute;overflow:hidden;z-index:50;user-select:text;-webkit-user-select:text;box-sizing:initial;animation:fadein .1s linear;line-height:1.5em}.monaco-hover.hidden{display:none}.monaco-hover a:hover:not(.disabled){cursor:pointer}.monaco-hover .hover-contents:not(.html-hover-contents){padding:4px 8px}.monaco-hover .markdown-hover>.hover-contents:not(.code-hover-contents){max-width:500px;word-wrap:break-word}.monaco-hover .markdown-hover>.hover-contents:not(.code-hover-contents) hr{min-width:100%}.monaco-hover .code,.monaco-hover h1,.monaco-hover h2,.monaco-hover h3,.monaco-hover h4,.monaco-hover h5,.monaco-hover h6,.monaco-hover p,.monaco-hover ul{margin:8px 0}.monaco-hover h1,.monaco-hover h2,.monaco-hover h3,.monaco-hover h4,.monaco-hover h5,.monaco-hover h6{line-height:1.1}.monaco-hover code{font-family:var(--monaco-monospace-font)}.monaco-hover hr{box-sizing:border-box;border-left:0;border-right:0;margin:4px -8px -4px;height:1px}.monaco-hover .code:first-child,.monaco-hover p:first-child,.monaco-hover ul:first-child{margin-top:0}.monaco-hover .code:last-child,.monaco-hover p:last-child,.monaco-hover ul:last-child{margin-bottom:0}.monaco-hover ol,.monaco-hover ul{padding-left:20px}.monaco-hover li>p{margin-bottom:0}.monaco-hover li>ul{margin-top:0}.monaco-hover code{border-radius:3px;padding:0 .4em}.monaco-hover .monaco-tokenized-source{white-space:pre-wrap}.monaco-hover .hover-row.status-bar{font-size:12px;line-height:22px}.monaco-hover .hover-row.status-bar .info{font-style:italic;padding:0 8px}.monaco-hover .hover-row.status-bar .actions{display:flex;padding:0 8px}.monaco-hover .hover-row.status-bar .actions .action-container{margin-right:16px;cursor:pointer}.monaco-hover .hover-row.status-bar .actions .action-container .action .icon{padding-right:4px}.monaco-hover .markdown-hover .hover-contents .codicon{color:inherit;font-size:inherit;vertical-align:middle}.monaco-hover .hover-contents a.code-link,.monaco-hover .hover-contents a.code-link:hover{color:inherit}.monaco-hover .hover-contents a.code-link:before{content:"("}.monaco-hover .hover-contents a.code-link:after{content:")"}.monaco-hover .hover-contents a.code-link>span{text-decoration:underline;border-bottom:1px solid transparent;text-underline-position:under;color:var(--vscode-textLink-foreground)}.monaco-hover .hover-contents a.code-link>span:hover{color:var(--vscode-textLink-activeForeground)}.monaco-hover .markdown-hover .hover-contents:not(.code-hover-contents):not(.html-hover-contents) span{margin-bottom:4px;display:inline-block}.monaco-hover-content .action-container a{-webkit-user-select:none;user-select:none}.monaco-hover-content .action-container.disabled{pointer-events:none;opacity:.4;cursor:default}.monaco-icon-label{display:flex;overflow:hidden;text-overflow:ellipsis}.monaco-icon-label:before{background-size:16px;background-position:0;background-repeat:no-repeat;padding-right:6px;width:16px;height:22px;line-height:inherit!important;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:top;flex-shrink:0}.monaco-icon-label-container.disabled{color:var(--vscode-disabledForeground)}.monaco-icon-label>.monaco-icon-label-container{min-width:0;overflow:hidden;text-overflow:ellipsis;flex:1}.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-name-container>.label-name{color:inherit;white-space:pre}.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-name-container>.label-name>.label-separator{margin:0 2px;opacity:.5}.monaco-icon-label>.monaco-icon-label-container>.monaco-icon-description-container>.label-description{opacity:.7;margin-left:.5em;font-size:.9em;white-space:pre}.monaco-icon-label.nowrap>.monaco-icon-label-container>.monaco-icon-description-container>.label-description{white-space:nowrap}.vs .monaco-icon-label>.monaco-icon-label-container>.monaco-icon-description-container>.label-description{opacity:.95}.monaco-icon-label.italic>.monaco-icon-label-container>.monaco-icon-description-container>.label-description,.monaco-icon-label.italic>.monaco-icon-label-container>.monaco-icon-name-container>.label-name{font-style:italic}.monaco-icon-label.deprecated{text-decoration:line-through;opacity:.66}.monaco-icon-label.italic:after{font-style:italic}.monaco-icon-label.strikethrough>.monaco-icon-label-container>.monaco-icon-description-container>.label-description,.monaco-icon-label.strikethrough>.monaco-icon-label-container>.monaco-icon-name-container>.label-name{text-decoration:line-through}.monaco-icon-label:after{opacity:.75;font-size:90%;font-weight:600;margin:auto 16px 0 5px;text-align:center}.monaco-list:focus .selected .monaco-icon-label,.monaco-list:focus .selected .monaco-icon-label:after{color:inherit!important}.monaco-list-row.focused.selected .label-description,.monaco-list-row.selected .label-description{opacity:.8}.monaco-inputbox{position:relative;display:block;padding:0;box-sizing:border-box;border-radius:2px;font-size:inherit}.monaco-inputbox>.ibwrapper>.input,.monaco-inputbox>.ibwrapper>.mirror{padding:4px 6px}.monaco-inputbox>.ibwrapper{position:relative;width:100%;height:100%}.monaco-inputbox>.ibwrapper>.input{display:inline-block;box-sizing:border-box;width:100%;height:100%;line-height:inherit;border:none;font-family:inherit;font-size:inherit;resize:none;color:inherit}.monaco-inputbox>.ibwrapper>input{text-overflow:ellipsis}.monaco-inputbox>.ibwrapper>textarea.input{display:block;scrollbar-width:none;outline:none}.monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.monaco-inputbox>.ibwrapper>textarea.input.empty{white-space:nowrap}.monaco-inputbox>.ibwrapper>.mirror{position:absolute;display:inline-block;width:100%;top:0;left:0;box-sizing:border-box;white-space:pre-wrap;visibility:hidden;word-wrap:break-word}.monaco-inputbox-container{text-align:right}.monaco-inputbox-container .monaco-inputbox-message{display:inline-block;overflow:hidden;text-align:left;width:100%;box-sizing:border-box;padding:.4em;font-size:12px;line-height:17px;margin-top:-1px;word-wrap:break-word}.monaco-inputbox .monaco-action-bar{position:absolute;right:2px;top:4px}.monaco-inputbox .monaco-action-bar .action-item{margin-left:2px}.monaco-inputbox .monaco-action-bar .action-item .codicon{background-repeat:no-repeat;width:16px;height:16px}.monaco-keybinding{display:flex;align-items:center;line-height:10px}.monaco-keybinding>.monaco-keybinding-key{display:inline-block;border-style:solid;border-width:1px;border-radius:3px;vertical-align:middle;font-size:11px;padding:3px 5px;margin:0 2px}.monaco-keybinding>.monaco-keybinding-key:first-child{margin-left:0}.monaco-keybinding>.monaco-keybinding-key:last-child{margin-right:0}.monaco-keybinding>.monaco-keybinding-key-separator{display:inline-block}.monaco-keybinding>.monaco-keybinding-key-chord-separator{width:6px}.monaco-list{position:relative;height:100%;width:100%;white-space:nowrap}.monaco-list.mouse-support{user-select:none;-webkit-user-select:none}.monaco-list>.monaco-scrollable-element{height:100%}.monaco-list-rows{position:relative;width:100%;height:100%}.monaco-list.horizontal-scrolling .monaco-list-rows{width:auto;min-width:100%}.monaco-list-row{position:absolute;box-sizing:border-box;overflow:hidden;width:100%}.monaco-list.mouse-support .monaco-list-row{cursor:pointer;touch-action:none}.monaco-list-row.scrolling{display:none!important}.monaco-list.element-focused,.monaco-list.selection-multiple,.monaco-list.selection-single{outline:0!important}.monaco-drag-image{display:inline-block;padding:1px 7px;border-radius:10px;font-size:12px;position:absolute;z-index:1000}.monaco-list-type-filter-message{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;padding:40px 1em 1em;text-align:center;white-space:normal;opacity:.7;pointer-events:none}.monaco-list-type-filter-message:empty{display:none}.monaco-mouse-cursor-text{cursor:text}.monaco-progress-container{width:100%;height:5px;overflow:hidden}.monaco-progress-container .progress-bit{width:2%;height:5px;position:absolute;left:0;display:none}.monaco-progress-container.active .progress-bit{display:inherit}.monaco-progress-container.discrete .progress-bit{left:0;transition:width .1s linear}.monaco-progress-container.discrete.done .progress-bit{width:100%}.monaco-progress-container.infinite .progress-bit{animation-name:progress;animation-duration:4s;animation-iteration-count:infinite;transform:translateZ(0);animation-timing-function:linear}.monaco-progress-container.infinite.infinite-long-running .progress-bit{animation-timing-function:steps(100)}@keyframes progress{0%{transform:translate(0) scaleX(1)}50%{transform:translate(2500%) scaleX(3)}to{transform:translate(4900%) scaleX(1)}}:root{--vscode-sash-size:4px}.monaco-sash{position:absolute;z-index:35;touch-action:none}.monaco-sash.disabled{pointer-events:none}.monaco-sash.mac.vertical{cursor:col-resize}.monaco-sash.vertical.minimum{cursor:e-resize}.monaco-sash.vertical.maximum{cursor:w-resize}.monaco-sash.mac.horizontal{cursor:row-resize}.monaco-sash.horizontal.minimum{cursor:s-resize}.monaco-sash.horizontal.maximum{cursor:n-resize}.monaco-sash.disabled{cursor:default!important;pointer-events:none!important}.monaco-sash.vertical{cursor:ew-resize;top:0;width:var(--vscode-sash-size);height:100%}.monaco-sash.horizontal{cursor:ns-resize;left:0;width:100%;height:var(--vscode-sash-size)}.monaco-sash:not(.disabled)>.orthogonal-drag-handle{content:" ";height:calc(var(--vscode-sash-size)*2);width:calc(var(--vscode-sash-size)*2);z-index:100;display:block;cursor:all-scroll;position:absolute}.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)>.orthogonal-drag-handle.start,.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)>.orthogonal-drag-handle.end{cursor:nwse-resize}.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)>.orthogonal-drag-handle.end,.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)>.orthogonal-drag-handle.start{cursor:nesw-resize}.monaco-sash.vertical>.orthogonal-drag-handle.start{left:calc(var(--vscode-sash-size)*-.5);top:calc(var(--vscode-sash-size)*-1)}.monaco-sash.vertical>.orthogonal-drag-handle.end{left:calc(var(--vscode-sash-size)*-.5);bottom:calc(var(--vscode-sash-size)*-1)}.monaco-sash.horizontal>.orthogonal-drag-handle.start{top:calc(var(--vscode-sash-size)*-.5);left:calc(var(--vscode-sash-size)*-1)}.monaco-sash.horizontal>.orthogonal-drag-handle.end{top:calc(var(--vscode-sash-size)*-.5);right:calc(var(--vscode-sash-size)*-1)}.monaco-sash:before{content:"";pointer-events:none;position:absolute;width:100%;height:100%;background:transparent}.monaco-workbench:not(.reduce-motion) .monaco-sash:before{transition:background-color .1s ease-out}.monaco-sash.active:before,.monaco-sash.hover:before{background:var(--vscode-sash-hoverBorder)}.monaco-sash.vertical:before{width:var(--vscode-sash-hover-size);left:calc(50% - var(--vscode-sash-hover-size)/2)}.monaco-sash.horizontal:before{height:var(--vscode-sash-hover-size);top:calc(50% - var(--vscode-sash-hover-size)/2)}.pointer-events-disabled{pointer-events:none!important}.monaco-sash.debug{background:#0ff}.monaco-sash.debug.disabled{background:#0ff3}.monaco-sash.debug:not(.disabled)>.orthogonal-drag-handle{background:red}.monaco-scrollable-element>.scrollbar>.scra{cursor:pointer;font-size:11px!important}.monaco-scrollable-element>.visible{opacity:1;background:transparent;transition:opacity .1s linear;z-index:11}.monaco-scrollable-element>.invisible{opacity:0;pointer-events:none}.monaco-scrollable-element>.invisible.fade{transition:opacity .8s linear}.monaco-scrollable-element>.shadow{position:absolute;display:none}.monaco-scrollable-element>.shadow.top{display:block;top:0;left:3px;height:3px;width:100%;box-shadow:var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset}.monaco-scrollable-element>.shadow.left{display:block;top:3px;left:0;height:100%;width:3px;box-shadow:var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset}.monaco-scrollable-element>.shadow.top-left-corner{display:block;top:0;left:0;height:3px;width:3px}.monaco-scrollable-element>.shadow.top.left{box-shadow:var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset}.monaco-scrollable-element>.scrollbar>.slider{background:var(--vscode-scrollbarSlider-background)}.monaco-scrollable-element>.scrollbar>.slider:hover{background:var(--vscode-scrollbarSlider-hoverBackground)}.monaco-scrollable-element>.scrollbar>.slider.active{background:var(--vscode-scrollbarSlider-activeBackground)}.monaco-select-box{width:100%;cursor:pointer;border-radius:2px}.monaco-select-box-dropdown-container{font-size:13px;font-weight:400;text-transform:none}.monaco-action-bar .action-item.select-container{cursor:default}.monaco-action-bar .action-item .monaco-select-box{cursor:pointer;min-width:100px;min-height:18px;padding:2px 23px 2px 8px}.mac .monaco-action-bar .action-item .monaco-select-box{font-size:11px;border-radius:5px}.monaco-select-box-dropdown-padding{--dropdown-padding-top:1px;--dropdown-padding-bottom:1px}.hc-black .monaco-select-box-dropdown-padding,.hc-light .monaco-select-box-dropdown-padding{--dropdown-padding-top:3px;--dropdown-padding-bottom:4px}.monaco-select-box-dropdown-container{display:none;box-sizing:border-box}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown *{margin:0}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown a:focus{outline:1px solid -webkit-focus-ring-color;outline-offset:-1px}.monaco-select-box-dropdown-container>.select-box-details-pane>.select-box-description-markdown code{line-height:15px;font-family:var(--monaco-monospace-font)}.monaco-select-box-dropdown-container.visible{display:flex;flex-direction:column;text-align:left;width:1px;overflow:hidden;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.monaco-select-box-dropdown-container>.select-box-dropdown-list-container{flex:0 0 auto;align-self:flex-start;padding-top:var(--dropdown-padding-top);padding-bottom:var(--dropdown-padding-bottom);padding-left:1px;padding-right:1px;width:100%;overflow:hidden;box-sizing:border-box}.monaco-select-box-dropdown-container>.select-box-details-pane{padding:5px}.hc-black .monaco-select-box-dropdown-container>.select-box-dropdown-list-container{padding-top:var(--dropdown-padding-top);padding-bottom:var(--dropdown-padding-bottom)}.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row{cursor:pointer}.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.option-text{text-overflow:ellipsis;overflow:hidden;padding-left:3.5px;white-space:nowrap;float:left}.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.option-detail{text-overflow:ellipsis;overflow:hidden;padding-left:3.5px;white-space:nowrap;float:left;opacity:.7}.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.option-decorator-right{text-overflow:ellipsis;overflow:hidden;padding-right:10px;white-space:nowrap;float:right}.monaco-select-box-dropdown-container>.select-box-dropdown-list-container .monaco-list .monaco-list-row>.visually-hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.monaco-select-box-dropdown-container>.select-box-dropdown-container-width-control{flex:1 1 auto;align-self:flex-start;opacity:0}.monaco-select-box-dropdown-container>.select-box-dropdown-container-width-control>.width-control-div{overflow:hidden;max-height:0}.monaco-select-box-dropdown-container>.select-box-dropdown-container-width-control>.width-control-div>.option-text-width-control{padding-left:4px;padding-right:8px;white-space:nowrap}.monaco-split-view2{position:relative;width:100%;height:100%}.monaco-split-view2>.sash-container{position:absolute;width:100%;height:100%;pointer-events:none}.monaco-split-view2>.sash-container>.monaco-sash{pointer-events:auto}.monaco-split-view2>.monaco-scrollable-element{width:100%;height:100%}.monaco-split-view2>.monaco-scrollable-element>.split-view-container{width:100%;height:100%;white-space:nowrap;position:relative}.monaco-split-view2>.monaco-scrollable-element>.split-view-container>.split-view-view{white-space:normal;position:absolute}.monaco-split-view2>.monaco-scrollable-element>.split-view-container>.split-view-view:not(.visible){display:none}.monaco-split-view2.vertical>.monaco-scrollable-element>.split-view-container>.split-view-view{width:100%}.monaco-split-view2.horizontal>.monaco-scrollable-element>.split-view-container>.split-view-view{height:100%}.monaco-split-view2.separator-border>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child):before{content:" ";position:absolute;top:0;left:0;z-index:5;pointer-events:none;background-color:var(--separator-border)}.monaco-split-view2.separator-border.horizontal>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child):before{height:100%;width:1px}.monaco-split-view2.separator-border.vertical>.monaco-scrollable-element>.split-view-container>.split-view-view:not(:first-child):before{height:1px;width:100%}.monaco-table{display:flex;flex-direction:column;position:relative;height:100%;width:100%;white-space:nowrap;overflow:hidden}.monaco-table>.monaco-split-view2{border-bottom:1px solid transparent}.monaco-table>.monaco-list{flex:1}.monaco-table-tr{display:flex;height:100%}.monaco-table-th{width:100%;height:100%;font-weight:700;overflow:hidden;text-overflow:ellipsis}.monaco-table-td,.monaco-table-th{box-sizing:border-box;flex-shrink:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.monaco-table>.monaco-split-view2 .monaco-sash.vertical:before{content:"";position:absolute;left:calc(var(--vscode-sash-size)/2);width:0;border-left:1px solid transparent}.monaco-workbench:not(.reduce-motion) .monaco-table>.monaco-split-view2,.monaco-workbench:not(.reduce-motion) .monaco-table>.monaco-split-view2 .monaco-sash.vertical:before{transition:border-color .2s ease-out}.monaco-custom-toggle{margin-left:2px;float:left;cursor:pointer;overflow:hidden;width:20px;height:20px;border-radius:3px;border:1px solid transparent;padding:1px;box-sizing:border-box;user-select:none;-webkit-user-select:none}.monaco-custom-toggle:hover{background-color:var(--vscode-inputOption-hoverBackground)}.hc-black .monaco-custom-toggle:hover,.hc-light .monaco-custom-toggle:hover{border:1px dashed var(--vscode-focusBorder)}.hc-black .monaco-custom-toggle,.hc-black .monaco-custom-toggle:hover,.hc-light .monaco-custom-toggle,.hc-light .monaco-custom-toggle:hover{background:none}.monaco-custom-toggle.monaco-checkbox{height:18px;width:18px;border:1px solid transparent;border-radius:3px;margin-right:9px;margin-left:0;padding:0;opacity:1;background-size:16px!important}.monaco-custom-toggle.monaco-checkbox:not(.checked):before{visibility:hidden}.monaco-toolbar{height:100%}.monaco-toolbar .toolbar-toggle-more{display:inline-block;padding:0}.monaco-tl-row{display:flex;height:100%;align-items:center;position:relative}.monaco-tl-row.disabled{cursor:default}.monaco-tl-indent{height:100%;position:absolute;top:0;left:16px;pointer-events:none}.hide-arrows .monaco-tl-indent{left:12px}.monaco-tl-indent>.indent-guide{display:inline-block;box-sizing:border-box;height:100%;border-left:1px solid transparent}.monaco-workbench:not(.reduce-motion) .monaco-tl-indent>.indent-guide{transition:border-color .1s linear}.monaco-tl-contents,.monaco-tl-twistie{height:100%}.monaco-tl-twistie{font-size:10px;text-align:right;padding-right:6px;flex-shrink:0;width:16px;display:flex!important;align-items:center;justify-content:center;transform:translate(3px)}.monaco-tl-contents{flex:1;overflow:hidden}.monaco-tl-twistie:before{border-radius:20px}.monaco-tl-twistie.collapsed:before{transform:rotate(-90deg)}.monaco-tl-twistie.codicon-tree-item-loading:before{animation:codicon-spin 1.25s steps(30) infinite}.monaco-tree-type-filter{position:absolute;top:0;display:flex;padding:3px;max-width:200px;z-index:100;margin:0 6px;border:1px solid var(--vscode-widget-border);border-bottom-left-radius:4px;border-bottom-right-radius:4px}.monaco-workbench:not(.reduce-motion) .monaco-tree-type-filter{transition:top .3s}.monaco-tree-type-filter.disabled{top:-40px!important}.monaco-tree-type-filter-grab{display:flex!important;align-items:center;justify-content:center;cursor:grab;margin-right:2px}.monaco-tree-type-filter-grab.grabbing{cursor:grabbing}.monaco-tree-type-filter-input{flex:1}.monaco-tree-type-filter-input .monaco-inputbox{height:23px}.monaco-tree-type-filter-input .monaco-inputbox>.ibwrapper>.input,.monaco-tree-type-filter-input .monaco-inputbox>.ibwrapper>.mirror{padding:2px 4px}.monaco-tree-type-filter-input .monaco-findInput>.controls{top:2px}.monaco-tree-type-filter-actionbar{margin-left:4px}.monaco-tree-type-filter-actionbar .monaco-action-bar .action-label{padding:2px}.monaco-editor .inputarea{min-width:0;min-height:0;margin:0;padding:0;position:absolute;outline:none!important;resize:none;border:none;overflow:hidden;color:transparent;background-color:transparent;z-index:-10}.monaco-editor .inputarea.ime-input{z-index:10;caret-color:var(--vscode-editorCursor-foreground);color:var(--vscode-editor-foreground)}.monaco-editor .blockDecorations-container{position:absolute;top:0;pointer-events:none}.monaco-editor .blockDecorations-block{position:absolute;box-sizing:border-box}.monaco-editor .margin-view-overlays .current-line,.monaco-editor .view-overlays .current-line{display:block;position:absolute;left:0;top:0;box-sizing:border-box}.monaco-editor .margin-view-overlays .current-line.current-line-margin.current-line-margin-both{border-right:0}.monaco-editor .lines-content .cdr{position:absolute}.monaco-editor .glyph-margin{position:absolute;top:0}.monaco-editor .margin-view-overlays .cgmr{position:absolute;display:flex;align-items:center}.monaco-editor .lines-content .core-guide{position:absolute;box-sizing:border-box}.monaco-editor .lines-content .core-guide-indent{box-shadow:1px 0 0 0 var(--vscode-editorIndentGuide-background) inset}.monaco-editor .lines-content .core-guide-indent-active{box-shadow:1px 0 0 0 var(--vscode-editorIndentGuide-activeBackground,--vscode-editorIndentGuide-background) inset}.monaco-editor .margin-view-overlays .line-numbers{font-variant-numeric:tabular-nums;position:absolute;text-align:right;display:inline-block;vertical-align:middle;box-sizing:border-box;cursor:default;height:100%}.monaco-editor .relative-current-line-number{text-align:left;display:inline-block;width:100%}.monaco-editor .margin-view-overlays .line-numbers.lh-odd{margin-top:1px}.monaco-editor .line-numbers{color:var(--vscode-editorLineNumber-foreground)}.monaco-editor .line-numbers.active-line-number{color:var(--vscode-editorLineNumber-activeForeground)}.mtkcontrol{color:#fff!important;background:#960000!important}.mtkoverflow{background-color:var(--vscode-button-background,--vscode-editor-background);color:var(--vscode-button-foreground,--vscode-editor-foreground);border:1px solid var(--vscode-contrastBorder);border-radius:2px;padding:4px;cursor:pointer}.mtkoverflow:hover{background-color:var(--vscode-button-hoverBackground)}.monaco-editor.no-user-select .lines-content,.monaco-editor.no-user-select .view-line,.monaco-editor.no-user-select .view-lines{user-select:none;-webkit-user-select:none}.monaco-editor.mac .lines-content:hover,.monaco-editor.mac .view-line:hover,.monaco-editor.mac .view-lines:hover{user-select:text;-webkit-user-select:text;-ms-user-select:text}.monaco-editor.enable-user-select{user-select:initial;-webkit-user-select:initial}.monaco-editor .view-lines{white-space:nowrap}.monaco-editor .view-line{position:absolute;width:100%}.monaco-editor .mtkw,.monaco-editor .mtkz{color:var(--vscode-editorWhitespace-foreground)!important}.monaco-editor .mtkz{display:inline-block}.monaco-editor .lines-decorations{position:absolute;top:0;background:#fff}.monaco-editor .margin-view-overlays .cldr{position:absolute;height:100%}.monaco-editor .margin{background-color:var(--vscode-editorGutter-background)}.monaco-editor .margin-view-overlays .cmdr{position:absolute;left:0;width:100%;height:100%}.monaco-editor .minimap.slider-mouseover .minimap-slider{opacity:0;transition:opacity .1s linear}.monaco-editor .minimap.slider-mouseover .minimap-slider.active,.monaco-editor .minimap.slider-mouseover:hover .minimap-slider{opacity:1}.monaco-editor .minimap-slider .minimap-slider-horizontal{background:var(--vscode-minimapSlider-background)}.monaco-editor .minimap-slider:hover .minimap-slider-horizontal{background:var(--vscode-minimapSlider-hoverBackground)}.monaco-editor .minimap-slider.active .minimap-slider-horizontal{background:var(--vscode-minimapSlider-activeBackground)}.monaco-editor .minimap-shadow-visible{box-shadow:var(--vscode-scrollbar-shadow) -6px 0 6px -6px inset}.monaco-editor .minimap-shadow-hidden{position:absolute;width:0}.monaco-editor .minimap-shadow-visible{position:absolute;left:-6px;width:6px}.monaco-editor.no-minimap-shadow .minimap-shadow-visible{position:absolute;left:-1px;width:1px}.minimap.autohide{opacity:0;transition:opacity .5s}.minimap.autohide:hover{opacity:1}.monaco-editor .overlayWidgets{position:absolute;top:0;left:0}.monaco-editor .view-ruler{position:absolute;top:0;box-shadow:1px 0 0 0 var(--vscode-editorRuler-foreground) inset}.monaco-editor .scroll-decoration{position:absolute;top:0;left:0;height:6px;box-shadow:var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset}.monaco-editor .lines-content .cslr{position:absolute}.monaco-editor .focused .selected-text{background-color:var(--vscode-editor-selectionBackground)}.monaco-editor .selected-text{background-color:var(--vscode-editor-inactiveSelectionBackground)}.monaco-editor .top-left-radius{border-top-left-radius:3px}.monaco-editor .bottom-left-radius{border-bottom-left-radius:3px}.monaco-editor .top-right-radius{border-top-right-radius:3px}.monaco-editor .bottom-right-radius{border-bottom-right-radius:3px}.monaco-editor.hc-black .top-left-radius{border-top-left-radius:0}.monaco-editor.hc-black .bottom-left-radius{border-bottom-left-radius:0}.monaco-editor.hc-black .top-right-radius{border-top-right-radius:0}.monaco-editor.hc-black .bottom-right-radius{border-bottom-right-radius:0}.monaco-editor.hc-light .top-left-radius{border-top-left-radius:0}.monaco-editor.hc-light .bottom-left-radius{border-bottom-left-radius:0}.monaco-editor.hc-light .top-right-radius{border-top-right-radius:0}.monaco-editor.hc-light .bottom-right-radius{border-bottom-right-radius:0}.monaco-editor .cursors-layer{position:absolute;top:0}.monaco-editor .cursors-layer>.cursor{position:absolute;overflow:hidden;box-sizing:border-box}.monaco-editor .cursors-layer.cursor-smooth-caret-animation>.cursor{transition:all 80ms}.monaco-editor .cursors-layer.cursor-block-outline-style>.cursor{background:transparent!important;border-style:solid;border-width:1px}.monaco-editor .cursors-layer.cursor-underline-style>.cursor{border-bottom-width:2px;border-bottom-style:solid;background:transparent!important}.monaco-editor .cursors-layer.cursor-underline-thin-style>.cursor{border-bottom-width:1px;border-bottom-style:solid;background:transparent!important}@keyframes monaco-cursor-smooth{0%,20%{opacity:1}60%,to{opacity:0}}@keyframes monaco-cursor-phase{0%,20%{opacity:1}90%,to{opacity:0}}@keyframes monaco-cursor-expand{0%,20%{transform:scaleY(1)}80%,to{transform:scaleY(0)}}.cursor-smooth{animation:monaco-cursor-smooth .5s ease-in-out 0s 20 alternate}.cursor-phase{animation:monaco-cursor-phase .5s ease-in-out 0s 20 alternate}.cursor-expand>.cursor{animation:monaco-cursor-expand .5s ease-in-out 0s 20 alternate}.monaco-editor .mwh{position:absolute;color:var(--vscode-editorWhitespace-foreground)!important}.monaco-diff-editor .diffOverview{z-index:9}.monaco-diff-editor .diffOverview .diffViewport{z-index:10}.monaco-diff-editor.vs .diffOverview{background:#00000008}.monaco-diff-editor.vs-dark .diffOverview{background:#ffffff03}.monaco-scrollable-element.modified-in-monaco-diff-editor.vs-dark .scrollbar,.monaco-scrollable-element.modified-in-monaco-diff-editor.vs .scrollbar{background:transparent}.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-black .scrollbar,.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-light .scrollbar{background:none}.monaco-scrollable-element.modified-in-monaco-diff-editor .slider{z-index:10}.modified-in-monaco-diff-editor .slider.active{background:#ababab66}.modified-in-monaco-diff-editor.hc-black .slider.active,.modified-in-monaco-diff-editor.hc-light .slider.active{background:none}.monaco-diff-editor .delete-sign,.monaco-diff-editor .insert-sign,.monaco-editor .delete-sign,.monaco-editor .insert-sign{font-size:11px!important;opacity:.7!important;display:flex!important;align-items:center}.monaco-diff-editor.hc-black .delete-sign,.monaco-diff-editor.hc-black .insert-sign,.monaco-diff-editor.hc-light .delete-sign,.monaco-diff-editor.hc-light .insert-sign,.monaco-editor.hc-black .delete-sign,.monaco-editor.hc-black .insert-sign,.monaco-editor.hc-light .delete-sign,.monaco-editor.hc-light .insert-sign{opacity:1}.monaco-editor .inline-added-margin-view-zone,.monaco-editor .inline-deleted-margin-view-zone{text-align:right}.monaco-editor .arrow-revert-change{z-index:10;position:absolute}.monaco-editor .arrow-revert-change:hover{cursor:pointer}.monaco-editor .view-zones .view-lines .view-line span{display:inline-block}.monaco-editor .margin-view-zones .lightbulb-glyph:hover{cursor:pointer}.monaco-diff-editor .char-insert,.monaco-editor .char-insert{background-color:var(--vscode-diffEditor-insertedTextBackground)}.monaco-diff-editor .line-insert,.monaco-editor .line-insert{background-color:var(--vscode-diffEditor-insertedLineBackground,--vscode-diffEditor-insertedTextBackground)}.monaco-editor .char-insert,.monaco-editor .line-insert{box-sizing:border-box;border:1px solid var(--vscode-diffEditor-insertedTextBorder)}.monaco-editor.hc-black .char-insert,.monaco-editor.hc-black .line-insert,.monaco-editor.hc-light .char-insert,.monaco-editor.hc-light .line-insert{border-style:dashed}.monaco-editor .char-delete,.monaco-editor .line-delete{box-sizing:border-box;border:1px solid var(--vscode-diffEditor-removedTextBorder)}.monaco-editor.hc-black .char-delete,.monaco-editor.hc-black .line-delete,.monaco-editor.hc-light .char-delete,.monaco-editor.hc-light .line-delete{border-style:dashed}.monaco-diff-editor .gutter-insert,.monaco-editor .gutter-insert,.monaco-editor .inline-added-margin-view-zone{background-color:var(--vscode-diffEditorGutter-insertedLineBackground,--vscode-diffEditor-insertedLineBackground,--vscode-diffEditor-insertedTextBackground)}.monaco-diff-editor .char-delete,.monaco-editor .char-delete{background-color:var(--vscode-diffEditor-removedTextBackground)}.monaco-diff-editor .line-delete,.monaco-editor .line-delete{background-color:var(--vscode-diffEditor-removedLineBackground,--vscode-diffEditor-removedTextBackground)}.monaco-diff-editor .gutter-delete,.monaco-editor .gutter-delete,.monaco-editor .inline-deleted-margin-view-zone{background-color:var(--vscode-diffEditorGutter-removedLineBackground,--vscode-diffEditor-removedLineBackground,--vscode-diffEditor-removedTextBackground)}.monaco-diff-editor.side-by-side .editor.modified{box-shadow:-6px 0 5px -5px var(--vscode-scrollbar-shadow);border-left:1px solid var(--vscode-diffEditor-border)}.monaco-diff-editor .diffViewport{background:var(--vscode-scrollbarSlider-background)}.monaco-diff-editor .diffViewport:hover{background:var(--vscode-scrollbarSlider-hoverBackground)}.monaco-diff-editor .diffViewport:active{background:var(--vscode-scrollbarSlider-activeBackground)}.monaco-diff-editor .diff-review-line-number{text-align:right;display:inline-block;color:var(--vscode-editorLineNumber-foreground)}.monaco-diff-editor .diff-review{position:absolute;user-select:none;-webkit-user-select:none}.monaco-diff-editor .diff-review-summary{padding-left:10px}.monaco-diff-editor .diff-review-shadow{position:absolute;box-shadow:var(--vscode-scrollbar-shadow) 0 -6px 6px -6px inset}.monaco-diff-editor .diff-review-row{white-space:pre}.monaco-diff-editor .diff-review-table{display:table;min-width:100%}.monaco-diff-editor .diff-review-row{display:table-row;width:100%}.monaco-diff-editor .diff-review-spacer{display:inline-block;width:10px;vertical-align:middle}.monaco-diff-editor .diff-review-spacer>.codicon{font-size:9px!important}.monaco-diff-editor .diff-review-actions{display:inline-block;position:absolute;right:10px;top:2px}.monaco-diff-editor .diff-review-actions .action-label{width:16px;height:16px;margin:2px 0}::-ms-clear{display:none}.monaco-editor .editor-widget input{color:inherit}.monaco-editor{position:relative;overflow:visible;-webkit-text-size-adjust:100%;color:var(--vscode-editor-foreground)}.monaco-editor,.monaco-editor-background{background-color:var(--vscode-editor-background)}.monaco-editor .rangeHighlight{background-color:var(--vscode-editor-rangeHighlightBackground);box-sizing:border-box;border:1px solid var(--vscode-editor-rangeHighlightBorder)}.monaco-editor.hc-black .rangeHighlight,.monaco-editor.hc-light .rangeHighlight{border-style:dotted}.monaco-editor .symbolHighlight{background-color:var(--vscode-editor-symbolHighlightBackground);box-sizing:border-box;border:1px solid var(--vscode-editor-symbolHighlightBorder)}.monaco-editor.hc-black .symbolHighlight,.monaco-editor.hc-light .symbolHighlight{border-style:dotted}.monaco-editor .overflow-guard{position:relative;overflow:hidden}.monaco-editor .view-overlays{position:absolute;top:0}.monaco-editor .squiggly-error{border-bottom:4px double var(--vscode-editorError-border)}.monaco-editor .squiggly-error:before{display:block;content:"";width:100%;height:100%;background:var(--vscode-editorError-background)}.monaco-editor .squiggly-warning{border-bottom:4px double var(--vscode-editorWarning-border)}.monaco-editor .squiggly-warning:before{display:block;content:"";width:100%;height:100%;background:var(--vscode-editorWarning-background)}.monaco-editor .squiggly-info{border-bottom:4px double var(--vscode-editorInfo-border)}.monaco-editor .squiggly-info:before{display:block;content:"";width:100%;height:100%;background:var(--vscode-editorInfo-background)}.monaco-editor .squiggly-hint{border-bottom:2px dotted var(--vscode-editorHint-border)}.monaco-editor.showUnused .squiggly-unnecessary{border-bottom:2px dashed var(--vscode-editorUnnecessaryCode-border)}.monaco-editor.showDeprecated .squiggly-inline-deprecated{text-decoration:line-through;text-decoration-color:var(--vscode-editor-foreground,inherit)}.monaco-editor .selection-anchor{background-color:#007acc;width:2px!important}.monaco-editor .bracket-match{box-sizing:border-box;background-color:var(--vscode-editorBracketMatch-background);border:1px solid var(--vscode-editorBracketMatch-border)}.monaco-editor .lightBulbWidget{display:flex;align-items:center;justify-content:center}.monaco-editor .lightBulbWidget:hover{cursor:pointer}.monaco-editor .lightBulbWidget.codicon-light-bulb{color:var(--vscode-editorLightBulb-foreground)}.monaco-editor .lightBulbWidget.codicon-lightbulb-autofix{color:var(--vscode-editorLightBulbAutoFix-foreground,var(--vscode-editorLightBulb-foreground))}.monaco-editor .lightBulbWidget:before{position:relative;z-index:2}.monaco-editor .lightBulbWidget:after{position:absolute;top:0;left:0;content:"";display:block;width:100%;height:100%;opacity:.3;background-color:var(--vscode-editor-background);z-index:1}.monaco-editor .codelens-decoration{overflow:hidden;display:inline-block;text-overflow:ellipsis;white-space:nowrap;color:var(--vscode-editorCodeLens-foreground);line-height:var(--vscode-editorCodeLens-lineHeight);font-size:var(--vscode-editorCodeLens-fontSize);padding-right:calc(var(--vscode-editorCodeLens-fontSize)*.5);font-feature-settings:var(--vscode-editorCodeLens-fontFeatureSettings);font-family:var(--vscode-editorCodeLens-fontFamily),var(--vscode-editorCodeLens-fontFamilyDefault)}.monaco-editor .codelens-decoration>a,.monaco-editor .codelens-decoration>span{user-select:none;-webkit-user-select:none;white-space:nowrap;vertical-align:sub}.monaco-editor .codelens-decoration>a{text-decoration:none}.monaco-editor .codelens-decoration>a:hover{cursor:pointer}.monaco-editor .codelens-decoration>a:hover,.monaco-editor .codelens-decoration>a:hover .codicon{color:var(--vscode-editorLink-activeForeground)!important}.monaco-editor .codelens-decoration .codicon{vertical-align:middle;color:currentColor!important;color:var(--vscode-editorCodeLens-foreground);line-height:var(--vscode-editorCodeLens-lineHeight);font-size:var(--vscode-editorCodeLens-fontSize)}.monaco-editor .codelens-decoration>a:hover .codicon:before{cursor:pointer}@keyframes fadein{0%{opacity:0;visibility:visible}to{opacity:1}}.monaco-editor .codelens-decoration.fadein{animation:fadein .1s linear}.colorpicker-widget{height:190px;user-select:none;-webkit-user-select:none}.colorpicker-color-decoration,.hc-light .colorpicker-color-decoration{border:.1em solid #000;box-sizing:border-box;margin:.1em .2em 0;width:.8em;height:.8em;line-height:.8em;display:inline-block;cursor:pointer}.hc-black .colorpicker-color-decoration,.vs-dark .colorpicker-color-decoration{border:.1em solid #eee}.colorpicker-header{display:flex;height:24px;position:relative;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=);background-size:9px 9px;image-rendering:pixelated}.colorpicker-header .picked-color{width:240px;display:flex;align-items:center;justify-content:center;line-height:24px;cursor:pointer;color:#fff;flex:1}.colorpicker-header .picked-color .codicon{color:inherit;font-size:14px;position:absolute;left:8px}.colorpicker-header .picked-color.light{color:#000}.colorpicker-header .original-color{width:74px;z-index:inherit;cursor:pointer}.standalone-colorpicker{color:var(--vscode-editorHoverWidget-foreground);background-color:var(--vscode-editorHoverWidget-background);border:1px solid var(--vscode-editorHoverWidget-border)}.colorpicker-header.standalone-colorpicker{border-bottom:none}.colorpicker-header .close-button{cursor:pointer;background-color:var(--vscode-editorHoverWidget-background);border-left:1px solid var(--vscode-editorHoverWidget-border)}.colorpicker-header .close-button-inner-div{width:100%;height:100%;text-align:center}.colorpicker-header .close-button-inner-div:hover{background-color:var(--vscode-toolbar-hoverBackground)}.colorpicker-header .close-icon{padding:3px}.colorpicker-body{display:flex;padding:8px;position:relative}.colorpicker-body .saturation-wrap{overflow:hidden;height:150px;position:relative;min-width:220px;flex:1}.colorpicker-body .saturation-box{height:150px;position:absolute}.colorpicker-body .saturation-selection{width:9px;height:9px;margin:-5px 0 0 -5px;border:1px solid #fff;border-radius:100%;box-shadow:0 0 2px #000c;position:absolute}.colorpicker-body .strip{width:25px;height:150px}.colorpicker-body .standalone-strip{width:25px;height:122px}.colorpicker-body .hue-strip{position:relative;margin-left:8px;cursor:grab;background:linear-gradient(180deg,red 0,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.colorpicker-body .opacity-strip{position:relative;margin-left:8px;cursor:grab;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=);background-size:9px 9px;image-rendering:pixelated}.colorpicker-body .strip.grabbing{cursor:grabbing}.colorpicker-body .slider{position:absolute;top:0;left:-2px;width:calc(100% + 4px);height:4px;box-sizing:border-box;border:1px solid hsla(0,0%,100%,.71);box-shadow:0 0 1px #000000d9}.colorpicker-body .strip .overlay{height:150px;pointer-events:none}.colorpicker-body .standalone-strip .standalone-overlay{height:122px;pointer-events:none}.standalone-colorpicker-body{display:block;border:1px solid transparent;border-bottom:1px solid var(--vscode-editorHoverWidget-border);overflow:hidden}.colorpicker-body .insert-button{height:20px;width:58px;position:absolute;right:8px;bottom:8px;background:var(--vscode-button-background);color:var(--vscode-button-foreground);border-radius:2px;border:none;cursor:pointer}.colorpicker-body .insert-button:hover{background:var(--vscode-button-hoverBackground)}.monaco-editor.hc-light .dnd-target,.monaco-editor.vs .dnd-target{border-right:2px dotted #000;color:#fff}.monaco-editor.vs-dark .dnd-target{border-right:2px dotted #aeafad;color:#51504f}.monaco-editor.hc-black .dnd-target{border-right:2px dotted #fff;color:#000}.monaco-editor.hc-black.mac.mouse-default .view-lines,.monaco-editor.hc-light.mac.mouse-default .view-lines,.monaco-editor.mouse-default .view-lines,.monaco-editor.vs-dark.mac.mouse-default .view-lines{cursor:default}.monaco-editor.hc-black.mac.mouse-copy .view-lines,.monaco-editor.hc-light.mac.mouse-copy .view-lines,.monaco-editor.mouse-copy .view-lines,.monaco-editor.vs-dark.mac.mouse-copy .view-lines{cursor:copy}.post-drop-widget{box-shadow:0 0 8px 2px var(--vscode-widget-shadow);border:1px solid var(--vscode-widget-border,transparent);border-radius:4px;background-color:var(--vscode-editorWidget-background);overflow:hidden}.post-drop-widget .monaco-button{padding:2px;border:none;border-radius:0}.post-drop-widget .monaco-button:hover{background-color:var(--vscode-button-secondaryHoverBackground)!important}.post-drop-widget .monaco-button .codicon{margin:0}.monaco-editor .findOptionsWidget{background-color:var(--vscode-editorWidget-background);color:var(--vscode-editorWidget-foreground);box-shadow:0 0 8px 2px var(--vscode-widget-shadow);border:2px solid var(--vscode-contrastBorder)}.monaco-editor .find-widget{position:absolute;z-index:35;height:33px;overflow:hidden;line-height:19px;transition:transform .2s linear;padding:0 4px;box-sizing:border-box;transform:translateY(calc(-100% - 10px));border-bottom-left-radius:4px;border-bottom-right-radius:4px}.monaco-workbench.reduce-motion .monaco-editor .find-widget{transition:transform 0ms linear}.monaco-editor .find-widget textarea{margin:0}.monaco-editor .find-widget.hiddenEditor{display:none}.monaco-editor .find-widget.replaceToggled>.replace-part{display:flex}.monaco-editor .find-widget.visible{transform:translateY(0)}.monaco-editor .find-widget .monaco-inputbox.synthetic-focus{outline:1px solid -webkit-focus-ring-color;outline-offset:-1px}.monaco-editor .find-widget .monaco-inputbox .input{background-color:transparent;min-height:0}.monaco-editor .find-widget .monaco-findInput .input{font-size:13px}.monaco-editor .find-widget>.find-part,.monaco-editor .find-widget>.replace-part{margin:3px 0 0 17px;font-size:12px;display:flex}.monaco-editor .find-widget>.find-part .monaco-inputbox,.monaco-editor .find-widget>.replace-part .monaco-inputbox{min-height:25px}.monaco-editor .find-widget>.replace-part .monaco-inputbox>.ibwrapper>.mirror{padding-right:22px}.monaco-editor .find-widget>.find-part .monaco-inputbox>.ibwrapper>.input,.monaco-editor .find-widget>.find-part .monaco-inputbox>.ibwrapper>.mirror,.monaco-editor .find-widget>.replace-part .monaco-inputbox>.ibwrapper>.input,.monaco-editor .find-widget>.replace-part .monaco-inputbox>.ibwrapper>.mirror{padding-top:2px;padding-bottom:2px}.monaco-editor .find-widget>.find-part .find-actions,.monaco-editor .find-widget>.replace-part .replace-actions{height:25px;display:flex;align-items:center}.monaco-editor .find-widget .monaco-findInput{vertical-align:middle;display:flex;flex:1}.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element{width:100%}.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element .scrollbar.vertical{opacity:0}.monaco-editor .find-widget .matchesCount{display:flex;flex:initial;margin:0 0 0 3px;padding:2px 0 0 2px;height:25px;vertical-align:middle;box-sizing:border-box;text-align:center;line-height:23px}.monaco-editor .find-widget .button{width:16px;height:16px;padding:3px;border-radius:5px;flex:initial;margin-left:3px;background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;align-items:center;justify-content:center}.monaco-editor .find-widget .codicon-find-selection{width:22px;height:22px;padding:3px;border-radius:5px}.monaco-editor .find-widget .button.left{margin-left:0;margin-right:3px}.monaco-editor .find-widget .button.wide{width:auto;padding:1px 6px;top:-1px}.monaco-editor .find-widget .button.toggle{position:absolute;top:0;left:3px;width:18px;height:100%;border-radius:0;box-sizing:border-box}.monaco-editor .find-widget .button.toggle.disabled{display:none}.monaco-editor .find-widget .disabled{color:var(--vscode-disabledForeground);cursor:default}.monaco-editor .find-widget>.replace-part{display:none}.monaco-editor .find-widget>.replace-part>.monaco-findInput{position:relative;display:flex;vertical-align:middle;flex:auto;flex-grow:0;flex-shrink:0}.monaco-editor .find-widget>.replace-part>.monaco-findInput>.controls{position:absolute;top:3px;right:2px}.monaco-editor .find-widget.reduced-find-widget .matchesCount{display:none}.monaco-editor .find-widget.narrow-find-widget{max-width:257px!important}.monaco-editor .find-widget.collapsed-find-widget{max-width:170px!important}.monaco-editor .find-widget.collapsed-find-widget .button.next,.monaco-editor .find-widget.collapsed-find-widget .button.previous,.monaco-editor .find-widget.collapsed-find-widget .button.replace,.monaco-editor .find-widget.collapsed-find-widget .button.replace-all,.monaco-editor .find-widget.collapsed-find-widget>.find-part .monaco-findInput .controls{display:none}.monaco-editor .findMatch{animation-duration:0;animation-name:inherit!important}.monaco-editor .find-widget .monaco-sash{left:0!important}.monaco-editor.hc-black .find-widget .button:before{position:relative;top:1px;left:2px}.monaco-editor .margin-view-overlays .codicon-folding-collapsed,.monaco-editor .margin-view-overlays .codicon-folding-expanded,.monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,.monaco-editor .margin-view-overlays .codicon-folding-manual-expanded{cursor:pointer;opacity:0;transition:opacity .5s;display:flex;align-items:center;justify-content:center;font-size:140%;margin-left:2px}.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-collapsed,.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-expanded,.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-expanded{transition:initial}.monaco-editor .margin-view-overlays .codicon.alwaysShowFoldIcons,.monaco-editor .margin-view-overlays .codicon.codicon-folding-collapsed,.monaco-editor .margin-view-overlays .codicon.codicon-folding-manual-collapsed,.monaco-editor .margin-view-overlays:hover .codicon{opacity:1}.monaco-editor .inline-folded:after{color:gray;margin:.1em .2em 0;content:"⋯";display:inline;line-height:1em;cursor:pointer}.monaco-editor .folded-background{background-color:var(--vscode-editor-foldBackground)}.monaco-editor .cldr.codicon.codicon-folding-collapsed,.monaco-editor .cldr.codicon.codicon-folding-expanded,.monaco-editor .cldr.codicon.codicon-folding-manual-collapsed,.monaco-editor .cldr.codicon.codicon-folding-manual-expanded{color:var(--vscode-editorGutter-foldingControlForeground)!important}.monaco-editor .peekview-widget .head .peekview-title .severity-icon{display:inline-block;vertical-align:text-top;margin-right:4px}.monaco-editor .marker-widget{text-overflow:ellipsis;white-space:nowrap}.monaco-editor .marker-widget>.stale{opacity:.6;font-style:italic}.monaco-editor .marker-widget .title{display:inline-block;padding-right:5px}.monaco-editor .marker-widget .descriptioncontainer{position:absolute;white-space:pre;user-select:text;-webkit-user-select:text;padding:8px 12px 0 20px}.monaco-editor .marker-widget .descriptioncontainer .message{display:flex;flex-direction:column}.monaco-editor .marker-widget .descriptioncontainer .message .details{padding-left:6px}.monaco-editor .marker-widget .descriptioncontainer .message .source,.monaco-editor .marker-widget .descriptioncontainer .message span.code{opacity:.6}.monaco-editor .marker-widget .descriptioncontainer .message a.code-link{opacity:.6;color:inherit}.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:before{content:"("}.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:after{content:")"}.monaco-editor .marker-widget .descriptioncontainer .message a.code-link>span{text-decoration:underline;border-bottom:1px solid transparent;text-underline-position:under;color:var(--vscode-textLink-foreground);color:var(--vscode-textLink-activeForeground)}.monaco-editor .marker-widget .descriptioncontainer .filename{cursor:pointer}.monaco-editor .goto-definition-link{text-decoration:underline;cursor:pointer;color:var(--vscode-editorLink-activeForeground)!important}.monaco-editor .zone-widget .zone-widget-container.reference-zone-widget{border-top-width:1px;border-bottom-width:1px}.monaco-editor .reference-zone-widget .inline{display:inline-block;vertical-align:top}.monaco-editor .reference-zone-widget .messages{height:100%;width:100%;text-align:center;padding:3em 0}.monaco-editor .reference-zone-widget .ref-tree{line-height:23px;background-color:var(--vscode-peekViewResult-background);color:var(--vscode-peekViewResult-lineForeground)}.monaco-editor .reference-zone-widget .ref-tree .reference{text-overflow:ellipsis;overflow:hidden}.monaco-editor .reference-zone-widget .ref-tree .reference-file{display:inline-flex;width:100%;height:100%;color:var(--vscode-peekViewResult-fileForeground)}.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .selected .reference-file{color:inherit!important}.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows>.monaco-list-row.selected:not(.highlighted){background-color:var(--vscode-peekViewResult-selectionBackground);color:var(--vscode-peekViewResult-selectionForeground)!important}.monaco-editor .reference-zone-widget .ref-tree .reference-file .count{margin-right:12px;margin-left:auto}.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight{background-color:var(--vscode-peekViewResult-matchHighlightBackground)}.monaco-editor .reference-zone-widget .preview .reference-decoration{background-color:var(--vscode-peekViewEditor-matchHighlightBackground);border:2px solid var(--vscode-peekViewEditor-matchHighlightBorder);box-sizing:border-box}.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input,.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background{background-color:var(--vscode-peekViewEditor-background)}.monaco-editor .reference-zone-widget .preview .monaco-editor .margin{background-color:var(--vscode-peekViewEditorGutter-background)}.monaco-editor.hc-black .reference-zone-widget .ref-tree .reference-file,.monaco-editor.hc-light .reference-zone-widget .ref-tree .reference-file{font-weight:700}.monaco-editor.hc-black .reference-zone-widget .ref-tree .referenceMatch .highlight,.monaco-editor.hc-light .reference-zone-widget .ref-tree .referenceMatch .highlight{border:1px dotted var(--vscode-contrastActiveBorder,transparent);box-sizing:border-box}.monaco-editor .hoverHighlight{background-color:var(--vscode-editor-hoverHighlightBackground)}.monaco-editor .monaco-hover{color:var(--vscode-editorHoverWidget-foreground);background-color:var(--vscode-editorHoverWidget-background);border:1px solid var(--vscode-editorHoverWidget-border)}.monaco-editor .monaco-hover a{color:var(--vscode-textLink-foreground)}.monaco-editor .monaco-hover a:hover{color:var(--vscode-textLink-activeForeground)}.monaco-editor .monaco-hover .hover-row .actions{background-color:var(--vscode-editorHoverWidget-statusBarBackground)}.monaco-editor .monaco-hover code{background-color:var(--vscode-textCodeBlock-background)}.monaco-editor.vs .valueSetReplacement{outline:solid 2px var(--vscode-editorBracketMatch-border)}.monaco-editor .suggest-preview-additional-widget{white-space:nowrap}.monaco-editor .suggest-preview-additional-widget .content-spacer{color:transparent;white-space:pre}.monaco-editor .suggest-preview-additional-widget .button{display:inline-block;cursor:pointer;text-decoration:underline;text-underline-position:under}.monaco-editor .ghost-text-hidden{opacity:0;font-size:0}.monaco-editor .ghost-text-decoration,.monaco-editor .suggest-preview-text .ghost-text{font-style:italic}.monaco-editor .inline-completion-text-to-replace{text-decoration:underline;text-underline-position:under}.monaco-editor .ghost-text-decoration,.monaco-editor .ghost-text-decoration-preview,.monaco-editor .suggest-preview-text .ghost-text{color:var(--vscode-editorGhostText-foreground)!important;background-color:var(--vscode-editorGhostText-background);border:1px solid var(--vscode-editorGhostText-border)}.monaco-editor .inlineSuggestionsHints.withBorder{z-index:39;color:var(--vscode-editorHoverWidget-foreground);background-color:var(--vscode-editorHoverWidget-background);border:1px solid var(--vscode-editorHoverWidget-border)}.monaco-editor .inlineSuggestionsHints a,.monaco-editor .inlineSuggestionsHints a:hover{color:var(--vscode-foreground)}.monaco-editor .inlineSuggestionsHints .keybinding{display:flex;margin-left:4px;opacity:.6}.monaco-editor .inlineSuggestionsHints .keybinding .monaco-keybinding-key{font-size:8px;padding:2px 3px}.monaco-editor .inlineSuggestionsHints .custom-actions .action-item:nth-child(2) a{display:flex;min-width:19px;justify-content:center}.monaco-editor .inlineSuggestionStatusBarItemLabel{margin-right:2px}.inline-editor-progress-decoration{display:inline-block;width:1em;height:1em}.inline-progress-widget{display:flex!important;justify-content:center;align-items:center}.inline-progress-widget .icon{font-size:80%!important}.inline-progress-widget:hover .icon{font-size:90%!important;animation:none}.inline-progress-widget:hover .icon:before{content:""}.monaco-editor .linked-editing-decoration{background-color:var(--vscode-editor-linkedEditingBackground);min-width:1px}.monaco-editor .detected-link,.monaco-editor .detected-link-active{text-decoration:underline;text-underline-position:under}.monaco-editor .detected-link-active{cursor:pointer;color:var(--vscode-editorLink-activeForeground)!important}.monaco-editor .rendered-markdown kbd{background-color:var(--vscode-keybindingLabel-background);color:var(--vscode-keybindingLabel-foreground);border-radius:3px;border:1px solid var(--vscode-keybindingLabel-border);border-bottom-color:var(--vscode-keybindingLabel-bottomBorder);box-shadow:inset 0 -1px 0 var(--vscode-widget-shadow);vertical-align:middle;padding:1px 3px}.monaco-editor .monaco-editor-overlaymessage{padding-bottom:8px;z-index:10000}.monaco-editor .monaco-editor-overlaymessage.below{padding-bottom:0;padding-top:8px;z-index:10000}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.monaco-editor .monaco-editor-overlaymessage.fadeIn{animation:fadeIn .15s ease-out}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.monaco-editor .monaco-editor-overlaymessage.fadeOut{animation:fadeOut .1s ease-out}.monaco-editor .monaco-editor-overlaymessage .message{padding:1px 4px;color:var(--vscode-inputValidation-infoForeground);background-color:var(--vscode-inputValidation-infoBackground);border:1px solid var(--vscode-inputValidation-infoBorder)}.monaco-editor.hc-black .monaco-editor-overlaymessage .message,.monaco-editor.hc-light .monaco-editor-overlaymessage .message{border-width:2px}.monaco-editor .monaco-editor-overlaymessage .anchor{width:0!important;height:0!important;z-index:1000;border:8px solid transparent;position:absolute}.monaco-editor .monaco-editor-overlaymessage .anchor.top{border-bottom-color:var(--vscode-inputValidation-infoBorder)}.monaco-editor .monaco-editor-overlaymessage .anchor.below{border-top-color:var(--vscode-inputValidation-infoBorder)}.monaco-editor .monaco-editor-overlaymessage.below .anchor.below,.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top{display:none}.monaco-editor .monaco-editor-overlaymessage.below .anchor.top{display:inherit;top:-8px}.monaco-editor .parameter-hints-widget{z-index:39;display:flex;flex-direction:column;line-height:1.5em;cursor:default;color:var(--vscode-editorHoverWidget-foreground);background-color:var(--vscode-editorHoverWidget-background);border:1px solid var(--vscode-editorHoverWidget-border)}.hc-black .monaco-editor .parameter-hints-widget,.hc-light .monaco-editor .parameter-hints-widget{border-width:2px}.monaco-editor .parameter-hints-widget>.phwrapper{max-width:440px;display:flex;flex-direction:row}.monaco-editor .parameter-hints-widget.multiple{min-height:3.3em;padding:0}.monaco-editor .parameter-hints-widget.multiple .body:before{content:"";display:block;height:100%;position:absolute;opacity:.5;border-left:1px solid var(--vscode-editorHoverWidget-border)}.monaco-editor .parameter-hints-widget p,.monaco-editor .parameter-hints-widget ul{margin:8px 0}.monaco-editor .parameter-hints-widget .body,.monaco-editor .parameter-hints-widget .monaco-scrollable-element{display:flex;flex:1;flex-direction:column;min-height:100%}.monaco-editor .parameter-hints-widget .signature{padding:4px 5px;position:relative}.monaco-editor .parameter-hints-widget .signature.has-docs:after{content:"";display:block;position:absolute;left:0;width:100%;padding-top:4px;opacity:.5;border-bottom:1px solid var(--vscode-editorHoverWidget-border)}.monaco-editor .parameter-hints-widget .docs{padding:0 10px 0 5px;white-space:pre-wrap}.monaco-editor .parameter-hints-widget .docs.empty{display:none}.monaco-editor .parameter-hints-widget .docs a{color:var(--vscode-textLink-foreground)}.monaco-editor .parameter-hints-widget .docs a:hover{color:var(--vscode-textLink-activeForeground);cursor:pointer}.monaco-editor .parameter-hints-widget .docs .markdown-docs{white-space:normal}.monaco-editor .parameter-hints-widget .docs code{font-family:var(--monaco-monospace-font);border-radius:3px;padding:0 .4em;background-color:var(--vscode-textCodeBlock-background)}.monaco-editor .parameter-hints-widget .docs .code,.monaco-editor .parameter-hints-widget .docs .monaco-tokenized-source{white-space:pre-wrap}.monaco-editor .parameter-hints-widget .controls{display:none;flex-direction:column;align-items:center;min-width:22px;justify-content:flex-end}.monaco-editor .parameter-hints-widget.multiple .controls{display:flex;padding:0 2px}.monaco-editor .parameter-hints-widget.multiple .button{width:16px;height:16px;background-repeat:no-repeat;cursor:pointer}.monaco-editor .parameter-hints-widget .button.previous{bottom:24px}.monaco-editor .parameter-hints-widget .overloads{text-align:center;height:12px;line-height:12px;font-family:var(--monaco-monospace-font)}.monaco-editor .parameter-hints-widget .signature .parameter.active{color:var(--vscode-editorHoverWidget-highlightForeground);font-weight:700}.monaco-editor .parameter-hints-widget .documentation-parameter>.parameter{font-weight:700;margin-right:.5em}.monaco-editor .peekview-widget .head{box-sizing:border-box;display:flex;justify-content:space-between;flex-wrap:nowrap}.monaco-editor .peekview-widget .head .peekview-title{display:flex;align-items:baseline;font-size:13px;margin-left:20px;min-width:0;text-overflow:ellipsis;overflow:hidden}.monaco-editor .peekview-widget .head .peekview-title.clickable{cursor:pointer}.monaco-editor .peekview-widget .head .peekview-title .dirname:not(:empty){font-size:.9em;margin-left:.5em}.monaco-editor .peekview-widget .head .peekview-title .dirname,.monaco-editor .peekview-widget .head .peekview-title .filename,.monaco-editor .peekview-widget .head .peekview-title .meta{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.monaco-editor .peekview-widget .head .peekview-title .meta:not(:empty):before{content:"-";padding:0 .3em}.monaco-editor .peekview-widget .head .peekview-actions{flex:1;text-align:right;padding-right:2px}.monaco-editor .peekview-widget .head .peekview-actions>.monaco-action-bar{display:inline-block}.monaco-editor .peekview-widget .head .peekview-actions>.monaco-action-bar,.monaco-editor .peekview-widget .head .peekview-actions>.monaco-action-bar>.actions-container{height:100%}.monaco-editor .peekview-widget>.body{border-top:1px solid;position:relative}.monaco-editor .peekview-widget .head .peekview-title .codicon{margin-right:4px;align-self:center}.monaco-editor .peekview-widget .monaco-list .monaco-list-row.focused .codicon{color:inherit!important}.monaco-editor .rename-box{z-index:100;color:inherit;border-radius:4px}.monaco-editor .rename-box.preview{padding:4px 4px 0}.monaco-editor .rename-box .rename-input{padding:3px;border-radius:2px}.monaco-editor .rename-box .rename-label{display:none;opacity:.8}.monaco-editor .rename-box.preview .rename-label{display:inherit}.monaco-editor .snippet-placeholder{min-width:2px;outline-style:solid;outline-width:1px;background-color:var(--vscode-editor-snippetTabstopHighlightBackground,transparent);outline-color:var(--vscode-editor-snippetTabstopHighlightBorder,transparent)}.monaco-editor .finish-snippet-placeholder{outline-style:solid;outline-width:1px;background-color:var(--vscode-editor-snippetFinalTabstopHighlightBackground,transparent);outline-color:var(--vscode-editor-snippetFinalTabstopHighlightBorder,transparent)}.monaco-editor .sticky-line{color:var(--vscode-editorLineNumber-foreground);overflow:hidden;white-space:nowrap;display:inline-block}.monaco-editor .sticky-line-number{text-align:right;float:left}.monaco-editor .sticky-line-root{background-color:inherit;overflow:hidden;white-space:nowrap;width:100%}.monaco-editor.hc-black .sticky-widget,.monaco-editor.hc-light .sticky-widget{border-bottom:1px solid var(--vscode-contrastBorder)}.monaco-editor .sticky-line-root:hover{background-color:var(--vscode-editorStickyScrollHover-background);cursor:pointer}.monaco-editor .sticky-widget{width:100%;box-shadow:var(--vscode-scrollbar-shadow) 0 3px 2px -2px;z-index:4;background-color:var(--vscode-editorStickyScroll-background)}.monaco-editor .sticky-widget.peek{background-color:var(--vscode-peekViewEditorStickyScroll-background)}.monaco-editor .suggest-widget{width:430px;z-index:40;display:flex;flex-direction:column}.monaco-editor .suggest-widget.message{flex-direction:row;align-items:center}.monaco-editor .suggest-details,.monaco-editor .suggest-widget{flex:0 1 auto;width:100%;border:1px solid var(--vscode-editorSuggestWidget-border);background-color:var(--vscode-editorSuggestWidget-background)}.monaco-editor.hc-black .suggest-details,.monaco-editor.hc-black .suggest-widget,.monaco-editor.hc-light .suggest-details,.monaco-editor.hc-light .suggest-widget{border-width:2px}.monaco-editor .suggest-widget .suggest-status-bar{box-sizing:border-box;display:none;flex-flow:row nowrap;justify-content:space-between;width:100%;font-size:80%;padding:0 4px;border-top:1px solid var(--vscode-editorSuggestWidget-border);overflow:hidden}.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar{display:flex}.monaco-editor .suggest-widget .suggest-status-bar .left{padding-right:8px}.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-label{color:var(--vscode-editorSuggestWidgetStatus-foreground)}.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label{margin-right:0}.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label:after{content:", ";margin-right:.3em}.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore,.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row>.contents>.main>.right>.readMore{display:none}.monaco-editor .suggest-widget.with-status-bar:not(.docs-side) .monaco-list .monaco-list-row:hover>.contents>.main>.right.can-expand-details>.details-label{width:100%}.monaco-editor .suggest-widget>.message{padding-left:22px}.monaco-editor .suggest-widget>.tree{height:100%;width:100%}.monaco-editor .suggest-widget .monaco-list{user-select:none;-webkit-user-select:none}.monaco-editor .suggest-widget .monaco-list .monaco-list-row{display:flex;-mox-box-sizing:border-box;box-sizing:border-box;padding-right:10px;background-repeat:no-repeat;background-position:2px 2px;white-space:nowrap;cursor:pointer;touch-action:none}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused{color:var(--vscode-editorSuggestWidget-selectedForeground)}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon{color:var(--vscode-editorSuggestWidget-selectedIconForeground)}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents{flex:1;height:100%;overflow:hidden;padding-left:2px}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main{display:flex;overflow:hidden;text-overflow:ellipsis;white-space:pre;justify-content:space-between}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left,.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right{display:flex}.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.focused)>.contents>.main .monaco-icon-label{color:var(--vscode-editorSuggestWidget-foreground)}.monaco-editor .suggest-widget:not(.frozen) .monaco-highlighted-label .highlight{font-weight:700}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main .monaco-highlighted-label .highlight{color:var(--vscode-editorSuggestWidget-highlightForeground)}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused>.contents>.main .monaco-highlighted-label .highlight{color:var(--vscode-editorSuggestWidget-focusHighlightForeground)}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close,.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:before{color:inherit;opacity:1;font-size:14px;cursor:pointer}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close{position:absolute;top:6px;right:2px}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close:hover,.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:hover{opacity:1}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label{opacity:.7}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.signature-label{overflow:hidden;text-overflow:ellipsis;opacity:.6}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.qualifier-label{margin-left:12px;opacity:.4;font-size:85%;line-height:normal;text-overflow:ellipsis;overflow:hidden;align-self:center}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label{font-size:85%;margin-left:1.1em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label>.monaco-tokenized-source{display:inline}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label{display:none}.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row.focused:not(.string-label)>.contents>.main>.right>.details-label,.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.right>.details-label,.monaco-editor .suggest-widget:not(.shows-details) .monaco-list .monaco-list-row.focused>.contents>.main>.right>.details-label{display:inline}.monaco-editor .suggest-widget:not(.docs-side) .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right.can-expand-details>.details-label{width:calc(100% - 26px)}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left{flex-shrink:1;flex-grow:1;overflow:hidden}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.monaco-icon-label{flex-shrink:0}.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.left>.monaco-icon-label{max-width:100%}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.left>.monaco-icon-label{flex-shrink:1}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right{overflow:hidden;flex-shrink:4;max-width:70%}.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore{display:inline-block;position:absolute;right:10px;width:18px;height:18px;visibility:hidden}.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row>.contents>.main>.right>.readMore{display:none!important}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.right>.readMore{display:none}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore{display:inline-block}.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right>.readMore{visibility:visible}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated{opacity:.66;text-decoration:unset}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated>.monaco-icon-label-container>.monaco-icon-name-container{text-decoration:line-through}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label:before{height:100%}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon{display:block;height:16px;width:16px;margin-left:2px;background-repeat:no-repeat;background-size:80%;background-position:50%}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.hide{display:none}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .suggest-icon{display:flex;align-items:center;margin-right:4px}.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .icon,.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .suggest-icon:before{display:none}.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.customcolor .colorspan{margin:0 0 0 .3em;border:.1em solid #000;width:.7em;height:.7em;display:inline-block}.monaco-editor .suggest-details-container{z-index:41}.monaco-editor .suggest-details{display:flex;flex-direction:column;cursor:default;color:var(--vscode-editorSuggestWidget-foreground)}.monaco-editor .suggest-details.focused{border-color:var(--vscode-focusBorder)}.monaco-editor .suggest-details a{color:var(--vscode-textLink-foreground)}.monaco-editor .suggest-details a:hover{color:var(--vscode-textLink-activeForeground)}.monaco-editor .suggest-details code{background-color:var(--vscode-textCodeBlock-background)}.monaco-editor .suggest-details.no-docs{display:none}.monaco-editor .suggest-details>.monaco-scrollable-element{flex:1}.monaco-editor .suggest-details>.monaco-scrollable-element>.body{box-sizing:border-box;height:100%;width:100%}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type{flex:2;overflow:hidden;text-overflow:ellipsis;opacity:.7;white-space:pre;margin:0 24px 0 0;padding:4px 0 12px 5px}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type.auto-wrap{white-space:normal;word-break:break-all}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs{margin:0;padding:4px 5px;white-space:pre-wrap}.monaco-editor .suggest-details.no-type>.monaco-scrollable-element>.body>.docs{margin-right:24px;overflow:hidden}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs{padding:0;white-space:normal;min-height:calc(1rem + 8px)}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div,.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>span:not(:empty){padding:4px 5px}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:first-child{margin-top:0}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:last-child{margin-bottom:0}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .monaco-tokenized-source{white-space:pre}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs .code{white-space:pre-wrap;word-wrap:break-word}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .codicon{vertical-align:sub}.monaco-editor .suggest-details>.monaco-scrollable-element>.body>p:empty{display:none}.monaco-editor .suggest-details code{border-radius:3px;padding:0 .4em}.monaco-editor .suggest-details ol,.monaco-editor .suggest-details ul{padding-left:20px}.monaco-editor .suggest-details p code{font-family:var(--monaco-monospace-font)}.monaco-editor .codicon.codicon-symbol-array,.monaco-workbench .codicon.codicon-symbol-array{color:var(--vscode-symbolIcon-arrayForeground)}.monaco-editor .codicon.codicon-symbol-boolean,.monaco-workbench .codicon.codicon-symbol-boolean{color:var(--vscode-symbolIcon-booleanForeground)}.monaco-editor .codicon.codicon-symbol-class,.monaco-workbench .codicon.codicon-symbol-class{color:var(--vscode-symbolIcon-classForeground)}.monaco-editor .codicon.codicon-symbol-method,.monaco-workbench .codicon.codicon-symbol-method{color:var(--vscode-symbolIcon-methodForeground)}.monaco-editor .codicon.codicon-symbol-color,.monaco-workbench .codicon.codicon-symbol-color{color:var(--vscode-symbolIcon-colorForeground)}.monaco-editor .codicon.codicon-symbol-constant,.monaco-workbench .codicon.codicon-symbol-constant{color:var(--vscode-symbolIcon-constantForeground)}.monaco-editor .codicon.codicon-symbol-constructor,.monaco-workbench .codicon.codicon-symbol-constructor{color:var(--vscode-symbolIcon-constructorForeground)}.monaco-editor .codicon.codicon-symbol-enum,.monaco-editor .codicon.codicon-symbol-value,.monaco-workbench .codicon.codicon-symbol-enum,.monaco-workbench .codicon.codicon-symbol-value{color:var(--vscode-symbolIcon-enumeratorForeground)}.monaco-editor .codicon.codicon-symbol-enum-member,.monaco-workbench .codicon.codicon-symbol-enum-member{color:var(--vscode-symbolIcon-enumeratorMemberForeground)}.monaco-editor .codicon.codicon-symbol-event,.monaco-workbench .codicon.codicon-symbol-event{color:var(--vscode-symbolIcon-eventForeground)}.monaco-editor .codicon.codicon-symbol-field,.monaco-workbench .codicon.codicon-symbol-field{color:var(--vscode-symbolIcon-fieldForeground)}.monaco-editor .codicon.codicon-symbol-file,.monaco-workbench .codicon.codicon-symbol-file{color:var(--vscode-symbolIcon-fileForeground)}.monaco-editor .codicon.codicon-symbol-folder,.monaco-workbench .codicon.codicon-symbol-folder{color:var(--vscode-symbolIcon-folderForeground)}.monaco-editor .codicon.codicon-symbol-function,.monaco-workbench .codicon.codicon-symbol-function{color:var(--vscode-symbolIcon-functionForeground)}.monaco-editor .codicon.codicon-symbol-interface,.monaco-workbench .codicon.codicon-symbol-interface{color:var(--vscode-symbolIcon-interfaceForeground)}.monaco-editor .codicon.codicon-symbol-key,.monaco-workbench .codicon.codicon-symbol-key{color:var(--vscode-symbolIcon-keyForeground)}.monaco-editor .codicon.codicon-symbol-keyword,.monaco-workbench .codicon.codicon-symbol-keyword{color:var(--vscode-symbolIcon-keywordForeground)}.monaco-editor .codicon.codicon-symbol-module,.monaco-workbench .codicon.codicon-symbol-module{color:var(--vscode-symbolIcon-moduleForeground)}.monaco-editor .codicon.codicon-symbol-namespace,.monaco-workbench .codicon.codicon-symbol-namespace{color:var(--vscode-symbolIcon-namespaceForeground)}.monaco-editor .codicon.codicon-symbol-null,.monaco-workbench .codicon.codicon-symbol-null{color:var(--vscode-symbolIcon-nullForeground)}.monaco-editor .codicon.codicon-symbol-number,.monaco-workbench .codicon.codicon-symbol-number{color:var(--vscode-symbolIcon-numberForeground)}.monaco-editor .codicon.codicon-symbol-object,.monaco-workbench .codicon.codicon-symbol-object{color:var(--vscode-symbolIcon-objectForeground)}.monaco-editor .codicon.codicon-symbol-operator,.monaco-workbench .codicon.codicon-symbol-operator{color:var(--vscode-symbolIcon-operatorForeground)}.monaco-editor .codicon.codicon-symbol-package,.monaco-workbench .codicon.codicon-symbol-package{color:var(--vscode-symbolIcon-packageForeground)}.monaco-editor .codicon.codicon-symbol-property,.monaco-workbench .codicon.codicon-symbol-property{color:var(--vscode-symbolIcon-propertyForeground)}.monaco-editor .codicon.codicon-symbol-reference,.monaco-workbench .codicon.codicon-symbol-reference{color:var(--vscode-symbolIcon-referenceForeground)}.monaco-editor .codicon.codicon-symbol-snippet,.monaco-workbench .codicon.codicon-symbol-snippet{color:var(--vscode-symbolIcon-snippetForeground)}.monaco-editor .codicon.codicon-symbol-string,.monaco-workbench .codicon.codicon-symbol-string{color:var(--vscode-symbolIcon-stringForeground)}.monaco-editor .codicon.codicon-symbol-struct,.monaco-workbench .codicon.codicon-symbol-struct{color:var(--vscode-symbolIcon-structForeground)}.monaco-editor .codicon.codicon-symbol-text,.monaco-workbench .codicon.codicon-symbol-text{color:var(--vscode-symbolIcon-textForeground)}.monaco-editor .codicon.codicon-symbol-type-parameter,.monaco-workbench .codicon.codicon-symbol-type-parameter{color:var(--vscode-symbolIcon-typeParameterForeground)}.monaco-editor .codicon.codicon-symbol-unit,.monaco-workbench .codicon.codicon-symbol-unit{color:var(--vscode-symbolIcon-unitForeground)}.monaco-editor .codicon.codicon-symbol-variable,.monaco-workbench .codicon.codicon-symbol-variable{color:var(--vscode-symbolIcon-variableForeground)}.editor-banner{box-sizing:border-box;cursor:default;width:100%;font-size:12px;display:flex;overflow:visible;height:26px;background:var(--vscode-banner-background)}.editor-banner .icon-container{display:flex;flex-shrink:0;align-items:center;padding:0 6px 0 10px}.editor-banner .icon-container.custom-icon{background-repeat:no-repeat;background-position:50%;background-size:16px;width:16px;padding:0;margin:0 6px 0 10px}.editor-banner .message-container{display:flex;align-items:center;line-height:26px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.editor-banner .message-container p{margin-block-start:0;margin-block-end:0}.editor-banner .message-actions-container{flex-grow:1;flex-shrink:0;line-height:26px;margin:0 4px}.editor-banner .message-actions-container a.monaco-button{width:inherit;margin:2px 8px;padding:0 12px}.editor-banner .message-actions-container a{padding:3px;margin-left:12px;text-decoration:underline}.editor-banner .action-container{padding:0 10px 0 6px}.editor-banner{background-color:var(--vscode-banner-background)}.editor-banner,.editor-banner .action-container .codicon,.editor-banner .message-actions-container .monaco-link{color:var(--vscode-banner-foreground)}.editor-banner .icon-container .codicon{color:var(--vscode-banner-iconForeground)}.monaco-editor .unicode-highlight{border:1px solid var(--vscode-editorUnicodeHighlight-border);background-color:var(--vscode-editorUnicodeHighlight-background);box-sizing:border-box}.monaco-editor .focused .selectionHighlight{background-color:var(--vscode-editor-selectionHighlightBackground);box-sizing:border-box;border:1px solid var(--vscode-editor-selectionHighlightBorder)}.monaco-editor.hc-black .focused .selectionHighlight,.monaco-editor.hc-light .focused .selectionHighlight{border-style:dotted}.monaco-editor .wordHighlight{background-color:var(--vscode-editor-wordHighlightBackground);box-sizing:border-box;border:1px solid var(--vscode-editor-wordHighlightBorder)}.monaco-editor.hc-black .wordHighlight,.monaco-editor.hc-light .wordHighlight{border-style:dotted}.monaco-editor .wordHighlightStrong{background-color:var(--vscode-editor-wordHighlightStrongBackground);box-sizing:border-box;border:1px solid var(--vscode-editor-wordHighlightStrongBorder)}.monaco-editor.hc-black .wordHighlightStrong,.monaco-editor.hc-light .wordHighlightStrong{border-style:dotted}.monaco-editor .wordHighlightText{background-color:var(--vscode-editor-wordHighlightTextBackground);box-sizing:border-box;border:1px solid var(--vscode-editor-wordHighlightTextBorder)}.monaco-editor.hc-black .wordHighlightText,.monaco-editor.hc-light .wordHighlightText{border-style:dotted}.monaco-editor .zone-widget{position:absolute;z-index:10}.monaco-editor .zone-widget .zone-widget-container{border-top-style:solid;border-bottom-style:solid;border-top-width:0;border-bottom-width:0;position:relative}.monaco-editor .accessibilityHelpWidget{padding:10px;vertical-align:middle;overflow:scroll;color:var(--vscode-editorWidget-foreground);background-color:var(--vscode-editorWidget-background);box-shadow:0 2px 8px var(--vscode-widget-shadow);border:2px solid var(--vscode-contrastBorder)}.monaco-editor .iPadShowKeyboard{width:58px;min-width:0;height:36px;min-height:0;margin:0;padding:0;position:absolute;resize:none;overflow:hidden;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC4wMzYgNC4wMUg0LjAwOFYzMi4wM2g0NC4wMjhWNC4wMXpNNC4wMDguMDA4QTQuMDAzIDQuMDAzIDAgMDAuMDA1IDQuMDFWMzIuMDNhNC4wMDMgNC4wMDMgMCAwMDQuMDAzIDQuMDAyaDQ0LjAyOGE0LjAwMyA0LjAwMyAwIDAwNC4wMDMtNC4wMDJWNC4wMUE0LjAwMyA0LjAwMyAwIDAwNDguMDM2LjAwOEg0LjAwOHpNOC4wMSA4LjAxM2g0LjAwM3Y0LjAwM0g4LjAxVjguMDEzem0xMi4wMDggMGgtNC4wMDJ2NC4wMDNoNC4wMDJWOC4wMTN6bTQuMDAzIDBoNC4wMDJ2NC4wMDNoLTQuMDAyVjguMDEzem0xMi4wMDggMGgtNC4wMDN2NC4wMDNoNC4wMDNWOC4wMTN6bTQuMDAyIDBoNC4wMDN2NC4wMDNINDAuMDNWOC4wMTN6bS0yNC4wMTUgOC4wMDVIOC4wMXY0LjAwM2g4LjAwNnYtNC4wMDN6bTQuMDAyIDBoNC4wMDN2NC4wMDNoLTQuMDAzdi00LjAwM3ptMTIuMDA4IDBoLTQuMDAzdjQuMDAzaDQuMDAzdi00LjAwM3ptMTIuMDA4IDB2NC4wMDNoLTguMDA1di00LjAwM2g4LjAwNXptLTMyLjAyMSA4LjAwNUg4LjAxdjQuMDAzaDQuMDAzdi00LjAwM3ptNC4wMDMgMGgyMC4wMTN2NC4wMDNIMTYuMDE2di00LjAwM3ptMjguMDE4IDBINDAuMDN2NC4wMDNoNC4wMDN2LTQuMDAzeiIgZmlsbD0iIzQyNDI0MiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDUzdjM2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) 50% no-repeat;border:4px solid #f6f6f6;border-radius:4px}.monaco-editor.vs-dark .iPadShowKeyboard{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC4wMzYgNC4wMUg0LjAwOFYzMi4wM2g0NC4wMjhWNC4wMXpNNC4wMDguMDA4QTQuMDAzIDQuMDAzIDAgMDAuMDA1IDQuMDFWMzIuMDNhNC4wMDMgNC4wMDMgMCAwMDQuMDAzIDQuMDAyaDQ0LjAyOGE0LjAwMyA0LjAwMyAwIDAwNC4wMDMtNC4wMDJWNC4wMUE0LjAwMyA0LjAwMyAwIDAwNDguMDM2LjAwOEg0LjAwOHpNOC4wMSA4LjAxM2g0LjAwM3Y0LjAwM0g4LjAxVjguMDEzem0xMi4wMDggMGgtNC4wMDJ2NC4wMDNoNC4wMDJWOC4wMTN6bTQuMDAzIDBoNC4wMDJ2NC4wMDNoLTQuMDAyVjguMDEzem0xMi4wMDggMGgtNC4wMDN2NC4wMDNoNC4wMDNWOC4wMTN6bTQuMDAyIDBoNC4wMDN2NC4wMDNINDAuMDNWOC4wMTN6bS0yNC4wMTUgOC4wMDVIOC4wMXY0LjAwM2g4LjAwNnYtNC4wMDN6bTQuMDAyIDBoNC4wMDN2NC4wMDNoLTQuMDAzdi00LjAwM3ptMTIuMDA4IDBoLTQuMDAzdjQuMDAzaDQuMDAzdi00LjAwM3ptMTIuMDA4IDB2NC4wMDNoLTguMDA1di00LjAwM2g4LjAwNXptLTMyLjAyMSA4LjAwNUg4LjAxdjQuMDAzaDQuMDAzdi00LjAwM3ptNC4wMDMgMGgyMC4wMTN2NC4wMDNIMTYuMDE2di00LjAwM3ptMjguMDE4IDBINDAuMDN2NC4wMDNoNC4wMDN2LTQuMDAzeiIgZmlsbD0iI0M1QzVDNSIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDUzdjM2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) 50% no-repeat;border:4px solid #252526}.monaco-editor .tokens-inspect-widget{z-index:50;user-select:text;-webkit-user-select:text;padding:10px;color:var(--vscode-editorHoverWidget-foreground);background-color:var(--vscode-editorHoverWidget-background);border:1px solid var(--vscode-editorHoverWidget-border)}.monaco-editor.hc-black .tokens-inspect-widget,.monaco-editor.hc-light .tokens-inspect-widget{border-width:2px}.monaco-editor .tokens-inspect-widget .tokens-inspect-separator{height:1px;border:0;background-color:var(--vscode-editorHoverWidget-border)}.monaco-editor .tokens-inspect-widget .tm-token{font-family:var(--monaco-monospace-font)}.monaco-editor .tokens-inspect-widget .tm-token-length{font-weight:400;font-size:60%;float:right}.monaco-editor .tokens-inspect-widget .tm-metadata-table{width:100%}.monaco-editor .tokens-inspect-widget .tm-metadata-value{font-family:var(--monaco-monospace-font);text-align:right}.monaco-editor .tokens-inspect-widget .tm-token-type{font-family:var(--monaco-monospace-font)}.quick-input-widget{font-size:13px}.quick-input-widget .monaco-highlighted-label .highlight{color:#0066bf}.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight{color:#9dddff}.vs-dark .quick-input-widget .monaco-highlighted-label .highlight{color:#0097fb}.hc-black .quick-input-widget .monaco-highlighted-label .highlight{color:#f38518}.hc-light .quick-input-widget .monaco-highlighted-label .highlight{color:#0f4a85}.monaco-keybinding>.monaco-keybinding-key{background-color:#ddd6;border:1px solid hsla(0,0%,80%,.4);border-bottom-color:#bbb6;box-shadow:inset 0 -1px #bbb6;color:#555}.hc-black .monaco-keybinding>.monaco-keybinding-key{background-color:transparent;border:1px solid #6fc3df;box-shadow:none;color:#fff}.hc-light .monaco-keybinding>.monaco-keybinding-key{background-color:transparent;border:1px solid #0f4a85;box-shadow:none;color:#292929}.vs-dark .monaco-keybinding>.monaco-keybinding-key{background-color:#8080802b;border:1px solid rgba(51,51,51,.6);border-bottom-color:#4449;box-shadow:inset 0 -1px #4449;color:#ccc}.monaco-editor{font-family:-apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,HelveticaNeue-Light,system-ui,Ubuntu,Droid Sans,sans-serif;--monaco-monospace-font:"SF Mono",Monaco,Menlo,Consolas,"Ubuntu Mono","Liberation Mono","DejaVu Sans Mono","Courier New",monospace}.monaco-editor.hc-black .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,.monaco-editor.hc-light .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,.monaco-editor.vs-dark .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,.monaco-menu .monaco-action-bar.vertical .action-item .action-menu-item:focus .action-label{stroke-width:1.2px}.monaco-hover p{margin:0}.monaco-aria-container{position:absolute!important;top:0;height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;clip:rect(1px,1px,1px,1px);clip-path:inset(50%)}.action-widget{font-size:13px;border-radius:0;min-width:160px;max-width:500px;z-index:40;display:block;width:100%;border:1px solid var(--vscode-editorWidget-border)!important;background-color:var(--vscode-editorWidget-background);color:var(--vscode-editorWidget-foreground)}.context-view-block{z-index:-1}.context-view-block,.context-view-pointerBlock{position:fixed;cursor:auto;left:0;top:0;width:100%;height:100%}.context-view-pointerBlock{z-index:2}.action-widget .monaco-list{user-select:none;-webkit-user-select:none;border:0!important}.action-widget .monaco-list:focus:before{outline:0!important}.action-widget .monaco-list .monaco-scrollable-element{overflow:visible}.action-widget .monaco-list .monaco-list-row{padding:0 10px;white-space:nowrap;cursor:pointer;touch-action:none;width:100%}.action-widget .monaco-list .monaco-list-row.action.focused:not(.option-disabled){background-color:var(--vscode-quickInputList-focusBackground)!important;color:var(--vscode-quickInputList-focusForeground);outline:1px solid var(--vscode-menu-selectionBorder,transparent);outline-offset:-1px}.action-widget .monaco-list-row.group-header{color:var(--vscode-pickerGroup-foreground)!important;font-weight:600}.action-widget .monaco-list .group-header,.action-widget .monaco-list .option-disabled,.action-widget .monaco-list .option-disabled .focused,.action-widget .monaco-list .option-disabled .focused:before,.action-widget .monaco-list .option-disabled:before{cursor:default!important;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;background-color:transparent!important;outline:0 solid!important}.action-widget .monaco-list-row.action{display:flex;gap:6px;align-items:center}.action-widget .monaco-list-row.action.option-disabled{color:var(--vscode-disabledForeground)}.action-widget .monaco-list-row.action.option-disabled .codicon{opacity:.4}.action-widget .monaco-list-row.action:not(.option-disabled) .codicon{color:inherit}.action-widget .monaco-list-row.action .title{flex:1;overflow:hidden;text-overflow:ellipsis}.action-widget .action-widget-action-bar{background-color:var(--vscode-editorHoverWidget-statusBarBackground);border-top:1px solid var(--vscode-editorHoverWidget-border)}.action-widget .action-widget-action-bar:before{display:block;content:"";width:100%}.action-widget .action-widget-action-bar .actions-container{padding:0 8px}.action-widget-action-bar .action-label{color:var(--vscode-textLink-activeForeground);font-size:12px;line-height:22px;padding:0;pointer-events:all}.action-widget-action-bar .action-item{margin-right:16px;pointer-events:none}.action-widget-action-bar .action-label:hover{background-color:transparent!important}.monaco-action-bar .action-item.menu-entry .action-label.icon{width:16px;height:16px;background-repeat:no-repeat;background-position:50%;background-size:16px}.monaco-dropdown-with-default{display:flex!important;flex-direction:row;border-radius:5px}.monaco-dropdown-with-default>.action-container>.action-label{margin-right:0}.monaco-dropdown-with-default>.action-container.menu-entry>.action-label.icon{width:16px;height:16px;background-repeat:no-repeat;background-position:50%;background-size:16px}.monaco-dropdown-with-default>.dropdown-action-container>.monaco-dropdown>.dropdown-label .codicon[class*=codicon-]{font-size:12px;padding-left:0;padding-right:0;line-height:16px;margin-left:-3px}.monaco-dropdown-with-default>.dropdown-action-container>.monaco-dropdown>.dropdown-label>.action-label{display:block;background-size:16px;background-position:50%;background-repeat:no-repeat}.monaco-link{color:var(--vscode-textLink-foreground)}.monaco-link:hover{color:var(--vscode-textLink-activeForeground)}.quick-input-widget{position:absolute;width:600px;z-index:2550;left:50%;margin-left:-300px;-webkit-app-region:no-drag;border-radius:6px}.quick-input-titlebar{display:flex;align-items:center;border-top-left-radius:5px;border-top-right-radius:5px}.quick-input-left-action-bar{display:flex;margin-left:4px;flex:1}.quick-input-title{padding:3px 0;text-align:center;text-overflow:ellipsis;overflow:hidden}.quick-input-right-action-bar{display:flex;margin-right:4px;flex:1}.quick-input-right-action-bar>.actions-container{justify-content:flex-end}.quick-input-titlebar .monaco-action-bar .action-label.codicon{background-position:50%;background-repeat:no-repeat;padding:2px}.quick-input-description{margin:6px}.quick-input-header .quick-input-description{margin:4px 2px}.quick-input-header{display:flex;padding:8px 6px 6px}.quick-input-widget.hidden-input .quick-input-header{padding:0;margin-bottom:0}.quick-input-and-message{display:flex;flex-direction:column;flex-grow:1;min-width:0;position:relative}.quick-input-check-all{align-self:center;margin:0}.quick-input-filter{flex-grow:1;display:flex;position:relative}.quick-input-box{flex-grow:1}.quick-input-widget.show-checkboxes .quick-input-box,.quick-input-widget.show-checkboxes .quick-input-message{margin-left:5px}.quick-input-visible-count{position:absolute;left:-10000px}.quick-input-count{align-self:center;position:absolute;right:4px;display:flex;align-items:center}.quick-input-count .monaco-count-badge{vertical-align:middle;padding:2px 4px;border-radius:2px;min-height:auto;line-height:normal}.quick-input-action{margin-left:6px}.quick-input-action .monaco-text-button{font-size:11px;padding:0 6px;display:flex;height:25px;align-items:center}.quick-input-message{margin-top:-1px;padding:5px;overflow-wrap:break-word}.quick-input-message>.codicon{margin:0 .2em;vertical-align:text-bottom}.quick-input-message a{color:inherit}.quick-input-progress.monaco-progress-container{position:relative}.quick-input-progress.monaco-progress-container,.quick-input-progress.monaco-progress-container .progress-bit{height:2px}.quick-input-list{line-height:22px}.quick-input-widget.hidden-input .quick-input-list{margin-top:4px;padding-bottom:4px}.quick-input-list .monaco-list{overflow:hidden;max-height:440px;padding-bottom:5px}.quick-input-list .monaco-scrollable-element{padding:0 5px}.quick-input-list .quick-input-list-entry{box-sizing:border-box;overflow:hidden;display:flex;height:100%;padding:0 6px}.quick-input-list .quick-input-list-entry.quick-input-list-separator-border{border-top-width:1px;border-top-style:solid}.quick-input-list .monaco-list-row{border-radius:3px}.quick-input-list .monaco-list-row[data-index="0"] .quick-input-list-entry.quick-input-list-separator-border{border-top-style:none}.quick-input-list .quick-input-list-label{overflow:hidden;display:flex;height:100%;flex:1}.quick-input-list .quick-input-list-checkbox{align-self:center;margin:0}.quick-input-list .quick-input-list-rows{overflow:hidden;text-overflow:ellipsis;display:flex;flex-direction:column;height:100%;flex:1;margin-left:5px}.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-rows{margin-left:10px}.quick-input-widget .quick-input-list .quick-input-list-checkbox{display:none}.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-checkbox{display:inline}.quick-input-list .quick-input-list-rows>.quick-input-list-row{display:flex;align-items:center}.quick-input-list .quick-input-list-rows>.quick-input-list-row .monaco-icon-label,.quick-input-list .quick-input-list-rows>.quick-input-list-row .monaco-icon-label .monaco-icon-label-container>.monaco-icon-name-container{flex:1}.quick-input-list .quick-input-list-rows>.quick-input-list-row .codicon[class*=codicon-]{vertical-align:text-bottom}.quick-input-list .quick-input-list-rows .monaco-highlighted-label>span{opacity:1}.quick-input-list .quick-input-list-entry .quick-input-list-entry-keybinding{margin-right:8px}.quick-input-list .quick-input-list-label-meta{opacity:.7;line-height:normal;text-overflow:ellipsis;overflow:hidden}.quick-input-list .monaco-highlighted-label .highlight{font-weight:700}.quick-input-list .quick-input-list-entry .quick-input-list-separator{margin-right:4px}.quick-input-list .quick-input-list-entry-action-bar{display:flex;flex:0;overflow:visible}.quick-input-list .quick-input-list-entry-action-bar .action-label{display:none}.quick-input-list .quick-input-list-entry-action-bar .action-label.codicon{margin-right:4px;padding:0 2px 2px}.quick-input-list .quick-input-list-entry-action-bar{margin-top:1px;margin-right:4px}.quick-input-list .monaco-list-row.focused .quick-input-list-entry-action-bar .action-label,.quick-input-list .quick-input-list-entry .quick-input-list-entry-action-bar .action-label.always-visible,.quick-input-list .quick-input-list-entry:hover .quick-input-list-entry-action-bar .action-label{display:flex}.quick-input-list .monaco-list-row.focused .monaco-keybinding-key,.quick-input-list .monaco-list-row.focused .quick-input-list-entry .quick-input-list-separator{color:inherit}.quick-input-list .monaco-list-row.focused .monaco-keybinding-key{background:none}.extension-editor .codicon.codicon-error,.extensions-viewlet>.extensions .codicon.codicon-error,.markers-panel .marker-icon .codicon.codicon-error,.markers-panel .marker-icon.error,.monaco-editor .zone-widget .codicon.codicon-error,.preferences-editor .codicon.codicon-error,.text-search-provider-messages .providerMessage .codicon.codicon-error{color:var(--vscode-problemsErrorIcon-foreground)}.extension-editor .codicon.codicon-warning,.extensions-viewlet>.extensions .codicon.codicon-warning,.markers-panel .marker-icon .codicon.codicon-warning,.markers-panel .marker-icon.warning,.monaco-editor .zone-widget .codicon.codicon-warning,.preferences-editor .codicon.codicon-warning,.text-search-provider-messages .providerMessage .codicon.codicon-warning{color:var(--vscode-problemsWarningIcon-foreground)}.extension-editor .codicon.codicon-info,.extensions-viewlet>.extensions .codicon.codicon-info,.markers-panel .marker-icon .codicon.codicon-info,.markers-panel .marker-icon.info,.monaco-editor .zone-widget .codicon.codicon-info,.preferences-editor .codicon.codicon-info,.text-search-provider-messages .providerMessage .codicon.codicon-info{color:var(--vscode-problemsInfoIcon-foreground)}',uo=_t`
  :host {
    display: block;
  }

  /* Fullscreen mode */
  :host([fullscreen]) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100vh !important;
    max-height: 100vh !important;
    z-index: 9999;
    background: var(--color-base-100);
  }

  :host([fullscreen]) .code-editor-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([fullscreen]) .editor-container {
    flex: 1 1 auto;
    height: 100% !important;
    max-height: 100% !important;
  }

  /* Wrapper with border around entire editor */
  .code-editor-wrapper {
    border: 1px solid var(--color-base-300);
    border-radius: 0.5rem;
  }

  /* Toolbar styling */
  aiux-toolbar {
    border-bottom: 1px solid var(--color-base-300);
    background: var(--color-base-200);
  }

  /* Editor container */
  .editor-container {
    width: 100%;
  }

  .editor-container .monaco-editor {
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .editor-container .monaco-editor .overflow-guard {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  :host([hide-toolbar]) .editor-container .monaco-editor {
    border-radius: 0.5rem;
  }

  :host([hide-toolbar]) .editor-container .monaco-editor .overflow-guard {
    border-radius: 0.5rem;
  }
`,fe={CONTENT_CHANGED:"AIUX_CODE_EDITOR#CONTENT_CHANGED",TEXT_EDITOR_FOCUS_CHANGED:"AIUX_CODE_EDITOR#TEXT_EDITOR_FOCUS_CHANGED",FULLSCREEN_TOGGLED:"AIUX_CODE_EDITOR#FULLSCREEN_TOGGLED"},Se={LINT:"LINT_MARKER"},q={JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",JSON:"json",HTML:"html",CSS:"css"},re={JSON:"json",CSS:"css",HTML:"html",TYPESCRIPT:"ts",EDITOR:"editor"},Ae={LINE_HEIGHT:18,TOOLBAR_HEIGHT:50,EDITOR_CONTENT_MARGIN_TOP:4},Et={LINT_DEBOUNCE_MS:500,LAYOUT_ADJUSTMENT_DELAY_MS:0},ee={HEIGHT:"400px",WIDTH:"100%",LANGUAGE:q.JAVASCRIPT,SCROLL_BEYOND_LAST_LINE:!0,AUTORESIZE_LINE_LIMIT:0,SCOPE:"global"},po={COMPLETIONS:"/api/now/syntax_editor/completions",SCRIPT_INCLUDE_METADATA:"/api/now/syntax_editor/script_include_metadata"},go="/scripts/snc-code-editor/eslint_bundle.min.js?sysparm_substitute=false",ot="/scripts/classes/monaco/lintWorker.js?sysparm_substitute=false";let Ie;async function mo(){return typeof window>"u"?null:(Ie||(Ie=io(()=>import("./editor.main-GPJj86Ab.js").then(i=>i.e),__vite__mapDeps([0,1,2,3]),import.meta.url)),Ie)}function fo(){typeof window>"u"||window.MonacoEnvironment||(window.MonacoEnvironment={getWorkerUrl:function(i,e){function t(o){return"/scripts/snc-code-editor/"+o+".worker.bundle.min.jsx?sysparm_substitute=false"}return e===q.JSON?t(re.JSON):e===q.CSS?t(re.CSS):e===q.HTML?t(re.HTML):e===q.TYPESCRIPT||e===q.JAVASCRIPT?t(re.TYPESCRIPT):t(re.EDITOR)}})}const be=Fe("@servicenow/aiux-components-code-editor/linting");class bo{constructor(e,t,o){this._monaco=null,this._editor=null,this._lintWorker=null,this._enableSyntaxCheck=!0,this._eslintConfig={},this._lintDebounceTimer=null,this._onErrorsChanged=null,this._monaco=e,this._editor=t,this._onErrorsChanged=o||null}async init(e,t){return e!==q.JAVASCRIPT||t?.disabled?!1:(this._disableMonacoJsDiagnostics(),this._lintWorker={onmessage:r=>{this._lintWorker?._workerInstance&&(this._lintWorker._workerInstance.onmessage=r)},postMessage:r=>{this._lintWorker?._workerInstance&&this._lintWorker._workerInstance.postMessage(r)},_workerInstance:null},this._initLintWorker()?(t?.lintConfig?this._eslintConfig=t.lintConfig:this._eslintConfig=await this._fetchEslintConfig(),this._enableSyntaxCheck=!0,this.validate(),!0):!1)}async _fetchEslintConfig(){try{const e=await ro("glide.ui.syntax_editor.linter.eslint_config");if(e)return JSON.parse(e)}catch(e){be.warn({error:e.message},"Failed to fetch or parse ESLint config")}return{}}_initLintWorker(){if(typeof Worker>"u")return!1;try{if(window.SharedWorker){const e=new SharedWorker(ot);e.onerror=t=>{be.error({error:String(t)},"Lint SharedWorker error")},e.port.start(),this._lintWorker._workerInstance=e.port}else{const e=new Worker(ot);e.onerror=t=>{be.error({error:String(t)},"Lint worker error")},this._lintWorker._workerInstance=e}return this._lintWorker._workerInstance.postMessage({linterUrl:go}),this._lintWorker.onmessage(e=>{const t=e.data;this._markLintErrors(t)}),!0}catch(e){return be.error({error:e.message},"Failed to initialize lint worker"),!1}}validate(){if(!this._editor||!this._lintWorker)return;const e=this._editor.getModel();if(!e)return;const t={content:e.getValue(),version:e.getVersionId(),eslintOptions:this._eslintConfig};this._lintWorker.postMessage(t)}_markLintErrors(e){if(!this._editor||!this._monaco||!this._enableSyntaxCheck)return;const t=this._editor.getModel();if(!t||e.version!==t.getVersionId())return;const o=e.errors.map(r=>({severity:this._getSeverity(r.severity),message:r.message,startLineNumber:r.from.line,startColumn:r.from.column,endLineNumber:r.to.line,endColumn:r.to.column}));this._monaco.editor.setModelMarkers(t,Se.LINT,o),this._onErrorsChanged&&this._onErrorsChanged()}_getSeverity(e){return{error:8,warning:4,info:2,hint:1}[e]||8}removeErrors(){if(!this._editor||!this._monaco)return;const e=this._editor.getModel();e&&(this._monaco.editor.setModelMarkers(e,Se.LINT,[]),this._onErrorsChanged&&this._onErrorsChanged())}toggleSyntaxCheck(){return this._enableSyntaxCheck=!this._enableSyntaxCheck,this._enableSyntaxCheck?this.validate():this.removeErrors(),this._enableSyntaxCheck}_disableMonacoJsDiagnostics(){if(!this._monaco)return;const e=this._monaco.languages.typescript.javascriptDefaults,t=e.getDiagnosticsOptions();e.setDiagnosticsOptions({...t,noSyntaxValidation:!0,noSuggestionDiagnostics:!0})}getCurrentErrors(){if(!this._editor||!this._monaco)return[];const e=this._editor.getModel();return e?(this._monaco.editor.getModelMarkers({resource:e.uri,owner:Se.LINT})||[]).map(o=>({message:o.message,severity:this._getMarkerSeverityString(o.severity),from:{line:o.startLineNumber,column:o.startColumn},to:{line:o.endLineNumber,column:o.endColumn}})):[]}_getMarkerSeverityString(e){switch(e){case 8:return"error";case 4:return"warning";case 2:return"info";case 1:return"hint";default:return"error"}}onContentChanged(){if(!this._editor)return;const e=this._editor.getModel();e&&(!this._enableSyntaxCheck||!this._lintWorker||(this._lintDebounceTimer&&clearTimeout(this._lintDebounceTimer),this._lintDebounceTimer=window.setTimeout(()=>{!e.isDisposed()&&this._enableSyntaxCheck&&this._lintWorker&&this.validate()},Et.LINT_DEBOUNCE_MS)))}get isEnabled(){return this._enableSyntaxCheck}get isInitialized(){return this._lintWorker!==null}dispose(){this._lintDebounceTimer&&(clearTimeout(this._lintDebounceTimer),this._lintDebounceTimer=null),this._lintWorker=null,this._monaco=null,this._editor=null,this._onErrorsChanged=null}}const vo=`/** The scoped GlideDate class provides methods for performing operations on GlideDate objects, such as instantiating GlideDate objects or working with GlideDate fields */
declare const GlideDate: GlideDate;
interface GlideDate {
    new(): GlideDate_proto;
    readonly prototype: GlideDate_proto;
}
interface GlideDate_proto {
    /** Gets the duration difference between two GlideDate values */
    subtract(start: GlideDate, end: GlideDate): GlideDuration;
    /** Gets the date in the given date format */
    getByFormat(format: string): string;
    /** Gets the date in the current user's display format and time zone */
    getDisplayValue(): string;
    /** Gets the display value in the internal format (yyyy-MM-dd). Note: This method is useful for date or time fields, but not date fields */
    getDisplayValueInternal(): string;
    /** Gets the date value stored in the database by the GlideDate object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default */
    getValue(): string;
    /** Sets a date value using the current user's display format and time zone */
    setDisplayValue(asDisplayed: string): void;
    /** Sets the date of the GlideDate object */
    setValue(o: any): void;
    /** Returns the day part of a date with no timezone conversion */
    getDayOfMonthNoTZ(): number;
    /** Returns the month part of a date with no timezone conversion */
    getMonthNoTZ(): number;
    /** Returns the year part of a date with no timezone conversion */
    getYearNoTZ(): number;
}
/** The scoped GlideDateTime default constructor, instantiates a new GlideDateTime object with the current date and time in Greenwich Mean Time (GMT). Optional 'value' parameter with a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss */
declare const GlideDateTime: GlideDateTime;
interface GlideDateTime {
    new(): GlideDateTime_proto;
    readonly prototype: GlideDateTime_proto;
}
interface GlideDateTime_proto {
    /** Gets the date in the system time zone */
    getDate(): GlideDate;
    /** Gets the duration difference between two GlideDateTime values. Pass a single paramter which specifies milliseconds to subtract from the current GlideDateTime object */
    subtract(start: GlideDateTime, end: GlideDateTime): GlideDuration;
    /** Gets the date for the user's time zone */
    getLocalDate(): GlideDate;
    /** Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user's time zone */
    getLocalTime(): GlideTime;
    /** Returns a GlideTime object that represents the time portion of the GlideDateTime object */
    getTime(): GlideTime;
    /** Adds a specified number of days to the current GlideDateTime object, expressed in the user's timezone */
    addDaysLocalTime(amount: number): void;
    /** Adds a specified number of days to the current GlideDateTime object, expressed in the UTC time zone */
    addDaysUTC(amount: number): void;
    /** Adds a specified number of months to the current GlideDateTime object, expressed in the user's time zone */
    addMonthsLocalTime(amount: number): void;
    /** Adds a specified number of months to the current GlideDateTime object, expressed in the UTC time zone */
    addMonthsUTC(amount: number): void;
    /** Adds a specified number of seconds to the current GlideDateTime object */
    addSeconds(value: number): void;
    /** Adds a specified number of weeks to the current GlideDateTime object, expressed in the user's timezone */
    addWeeksLocalTime(amount: number): void;
    /** Adds a specified number of weeks to the current GlideDateTime object, expressed in the UTC time zone */
    addWeeksUTC(amount: number): void;
    /** Adds a specified number of years to the current GlideDateTime object, expressed in the user's time zone */
    addYearsLocalTime(amount: number): void;
    /** Adds a specified number of years to the current GlideDateTime object, expressed in the UTC time zone */
    addYearsUTC(amount: number): void;
    /** Compares two GlideDateTime objects */
    compareTo(Object: GlideDateTime): number;
    equals(Object: GlideDateTime): boolean;
    /** Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone */
    getDayOfMonthLocalTime(): number;
    /** Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone */
    getDayOfMonthUTC(): number;
    /** Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone */
    getDayOfWeekLocalTime(): number;
    /** Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone */
    getDayOfWeekUTC(): number;
    /** Sets the day of the month to a specified value in the user's time zone */
    getDaysInMonthLocalTime(): number;
    /** Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone */
    getDaysInMonthUTC(): number;
    /** Gets the datetime in the current user's display format and time zone */
    getDisplayValue(): string;
    /** Gets the display value in the internal datetime format */
    getDisplayValueInternal(): string;
    getDisplayValueWithoutTZ(): string;
    /** Gets the amount of time that daylight savings time is offset */
    getDSTOffset(): number;
    /** Gets the current error message */
    getErrorMsg(): string;
    /** Gets the month stored by the GlideDateTime object, expressed in the current user's time zone */
    getMonthLocalTime(): number;
    /** Gets the month stored by the GlideDateTime object, expressed in the UTC time zone */
    getMonthUTC(): number;
    /** Gets the number of milliseconds since January 1, 1970, 00:00:00 Greenwich Mean Time (GMT) */
    getNumericValue(): number;
    getTZOffset(): number;
    /** Gets a datetiime value in the same format as it is stored in the database */
    getValue(): string;
    /** Gets the number of the week stored by the GlideDateTime object, expressed in the user's time zone */
    getWeekOfYearLocalTime(): number;
    /** Gets the number of the current week of the current year */
    getWeekOfYearUTC(): number;
    /** Gets the year stored by the GlideDateTime object, expressed in the current user's time zone */
    getYearLocalTime(): number;
    /** Gets the year stored by the GlideDateTime object, expressed in the UTC time zone */
    getYearUTC(): number;
    /** Determines if an object's date is set */
    hasDate(): boolean;
    hashCode(): number;
    /** Determines if an object's time uses a daylight savings offset */
    isDST(): boolean;
    /** Determines if a value is a valid datetime */
    isValid(): boolean;
    /** Sets the day of the month to a specified value in the local time zone */
    setDayOfMonthLocalTime(day: number): void;
    /** Sets the day of the month to a specified value in the UTC time zone */
    setDayOfMonthUTC(day: number): void;
    /** Sets a date and time value using the current user's display format and time zone. Also set an optional parameter 'format', to set date and time format */
    setDisplayValue(value: string, format: string): void;
    /** Sets a date and time value using the internal format and the current user's time zone */
    setDisplayValueInternal(value: string): void;
    /** Sets the month stored by the GlideDateTime object to a specified value using the current user's time zone */
    setMonthLocalTime(month: number): void;
    /** Sets the month stored by the GlideDateTime object to a specified value using the UTC time zone */
    setMonthUTC(month: number): void;
    /** Sets the date and time */
    setValue(value: number): void;
    /** Sets a date and time value using the UTC time zone and the specified date and time format */
    setValueUTC(dt: string, format: string): void;
    /** Sets the year stored by the GlideDateTime object to a specified value using the current user's time zone */
    setYearLocalTime(year: number): void;
    /** Sets the year stored by the GlideDateTime object to a specified value using the UTC time zone */
    setYearUTC(year: number): void;
    /** Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter */
    setGlideDateTime(gdt: GlideDateTime): void;
    /** Adds a GlideTime object to the current GlideDateTime object */
    add(gt: GlideTime): void;
    /** Converts a datetime value to a string */
    toString(): string;
    /** Returns local time with user time format */
    getUserFormattedLocalTime(): string;
    /** Returns local time with internal time format */
    getInternalFormattedLocalTime(): string;
    /** Returns true if the object's data time is after the input argument */
    after(Object: GlideDateTime): boolean;
    /** Returns true if the object's data time is before the input argument */
    before(Object: GlideDateTime): boolean;
    /** Returns true if the object's data time is on or after the input argument */
    onOrAfter(Object: GlideDateTime): boolean;
    /** Returns true if the object's data time is on or before the input argument */
    onOrBefore(Object: GlideDateTime): boolean;
}
/** The scoped GlideDuration class provides methods for working with spans of time or durations. GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00. As a result, setValue() and getValue() use the GlideDateTime object for parameters and return values */
declare const GlideDuration: GlideDuration;
interface GlideDuration {
    new(): GlideDuration_proto;
    readonly prototype: GlideDuration_proto;
}
interface GlideDuration_proto {
    /** Adds a given duration to the current duration */
    add(value: GlideDuration): GlideDuration;
    subtract(value: GlideDuration): GlideDuration;
    /** Gets the current duration in the given format */
    getByFormat(format: string): string;
    /** Gets the number of days */
    getDayPart(): number;
    /** Gets the display value of the duration in number of days, hours, and minutes */
    getDisplayValue(): string;
    /** Gets the duration value in d HH:mm:ss format */
    getDurationValue(): string;
    /** Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down */
    getRoundedDayPart(): number;
    /** Gets internal value of the this duration object. GlidDuration is stored as DateTime */
    getValue(): string;
    /** Sets the display value */
    setDisplayValue(asDisplayed: string): void;
    /** Sets the internal value of the GlideDuration object. Internally, GlidDuration is stored as DateTime */
    setValue(o: any): void;
}
/** The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields */
declare const GlideTime: GlideTime;
interface GlideTime {
    new(): GlideTime_proto;
    readonly prototype: GlideTime_proto;
}
interface GlideTime_proto {
    /** Gets the duration difference between two GlideTime values */
    subtract(start: GlideTime, end: GlideTime): GlideDuration;
    /** Gets the time in the given time format */
    getByFormat(format: string): string;
    /** Gets the time in the current user's display format and time zone */
    getDisplayValue(): string;
    /** Gets the display value in the current user's time zone and the internal format (HH:mm:ss). Useful for date/time fields, but not for date fields */
    getDisplayValueInternal(): string;
    /** Gets the time value stored in the database by the GlideTime object in the internal format, HH:mm:ss, and the system time zone, UTC by default */
    getValue(): string;
    /** Sets a time value using the current user's display format and time zone */
    setDisplayValue(asDisplayed: string): void;
    /** Sets the time of the GlideTime object in the internal time zone, which is UTC by default or the value of the glide.sys.internal.tz property, if set */
    setValue(value: any): void;
    /** Returns the hour-of-the-day part of UTC time 0-23 */
    getHourOfDayUTC(): number;
    /** Returns hour part of UTC time 0-11 */
    getHourUTC(): number;
    /** Returns minutes part of UTC time */
    getMinutesUTC(): number;
    /** Returns hour-of-the-day part of local time 0-23 */
    getHourOfDayLocalTime(): number;
    /** Returns hour part of local time 0-11 */
    getHourLocalTime(): number;
    /** Returns minutes part of local time */
    getMinutesLocalTime(): number;
    /** Returns seconds part of time */
    getSeconds(): number;
}
/** The scoped GlideSchedule API provides methods for performing operations on GlideSchedule objects, such as adding new schedule segments to a schedule, determining if a datetime is within the schedule, or setting the schedule timezone */
declare const GlideSchedule: GlideSchedule;
interface GlideSchedule {
    new(): GlideSchedule_proto;
    readonly prototype: GlideSchedule_proto;
}
interface GlideSchedule_proto {
    /** Adds a new schedule segment to the current schedule */
    add(startDate: GlideDateTime, offset: GlideDuration): GlideDateTime;
    /** Determines the elapsed time in the schedule between two date time values using the timezone of the schedule or, if that is not specified, the timezone of the session */
    duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
    /** Determines if the current schedule is valid. A schedule is valid if it has at least one schedule span */
    isValid(): boolean;
    /** Gets the current schedule name */
    getName(): string;
    /** Loads a schedule with the schedule information. If a timezone is not specified or is nil, the current session timezone is used for the schedule */
    load(sysID: string, timeZone: string, excludeSpanID: string): void;
    /** Sets the timezone for the current schedule */
    setTimeZone(tz: string): void;
}
/** The Scoped GlideUser API provides access to information about the current user and current user roles. Using the Scoped GlideUser API avoids the need to use the slower GlideRecord queries to get user information */
declare const GlideUser: GlideUser;
interface GlideUser {
    new(): GlideUser_proto;
    readonly prototype: GlideUser_proto;
}
interface GlideUser_proto {
    /** Gets the sys_id of current user */
    getID(): string;
    /** Gets the user id, or login name, of the current user */
    getName(): string;
    /** Gets the display name of the current user */
    getDisplayName(): string;
    /** Gets the Company ID of the current user */
    getCompanyID(): string;
    /** Determines if the current user is a member of the specified group */
    isMemberOf(group: string): boolean;
    /** Determines if the current user has the specified role */
    hasRole(role: string): boolean;
    /** Saves a user preference value to the database */
    savePreference(name: string, value: string): void;
    /** Gets the specified user preference value for the current user */
    getPreference(name: string): string;
}
/** GlideSession manages all of the information for a user session. You can retrieve this from gs.getSession() */
declare const GlideSession: GlideSession;
interface GlideSession {
    new(): GlideSession_proto;
    readonly prototype: GlideSession_proto;
}
interface GlideSession_proto {
    /** Checks if the current session is interactive */
    isInteractive(): boolean;
    /** Determines if the current user is currently logged in */
    isLoggedIn(): boolean;
    /** Get the Time Zone name associated with the user */
    getTimeZoneName(): string;
    /** Language used by the user */
    getLanguage(): string;
    /** Gets the current URI for the session */
    getUrlOnStack(): string;
    /** Gets the ID of current application, defined as a user preference and set by the application picker */
    getCurrentApplicationId(): string;
    /** Gets the client IP address */
    getClientIP(): string;
    /** Fetch the value in active session based on the name */
    getClientData(name: string): string;
    /** Store a value in an active session */
    putClientData(name: string, value: string): void;
}
/** The scoped GlideAggregate class is an extension of GlideRecord and allows database aggregation (COUNT, SUM, MIN, MAX, AVG) queries to be done. This can be helpful in creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields. Since currency fields are strings, you can't use the GlideAggregate class on currency fields */
declare const GlideAggregate: GlideAggregate;
interface GlideAggregate {
    new(): GlideAggregate_proto;
    readonly prototype: GlideAggregate_proto;
}
interface GlideAggregate_proto {
    /** Adds a query to the aggregate */
    addQuery(field: string, operator: string, value: string): GlideQueryCondition;
    /** Adds a NULL query to the aggregate */
    addNullQuery(field: string): GlideQueryCondition;
    /** Adds a NOT NULL query to the aggregate */
    addNotNullQuery(field: string): GlideQueryCondition;
    /** Issues the query and gets the results */
    query(): void;
    /** Adds an aggregate */
    addAggregate(aggregate: string, field: string): void;
    /** Gets the value of the specified aggregate */
    getAggregate(aggregate: string, field: string): string;
    /** Retrieves the number of rows in the GlideRecord */
    getRowCount(): number;
    /** Retrieves the table name associated with this GlideRecord */
    getTableName(): string;
    /** Gets the value of a field */
    getValue(field: string): string;
    /** Retrieves the encoded query */
    getEncodedQuery(): string;
    /** Adds a query to the aggregate. Adds an encoded query to the other queries that may have been set for this aggregate */
    addEncodedQuery(query: string): void;
    /** Gets the query necessary to return the current aggregate */
    getAggregateEncodedQuery(): string;
    /** Provides the name of a field to use in grouping the aggregates. May be called numerous times to set multiple group fields */
    groupBy(field: string): void;
    /** Orders the aggregates using the value of the specified field. The field will also be added to the group-by list */
    orderBy(field: string): void;
    /** Sorts the aggregates into descending order based on the specified field */
    orderByDesc(field: string): void;
    /** Sorts the aggregates based on the specified aggregate and field */
    orderByAggregate(aggregate: string, field: string): void;
    /** Moves to the next record in the GlideAggregat
     * e */
    next(): boolean;
    /** Determines if there are any more results in the GlideAggregate */
    hasNext(): boolean;
    /** Sets whether the results are to be grouped */
    setGroup(value: boolean): void;
}
/** The Scoped GlideElement API provides methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord */
declare const GlideElement: GlideElement;
interface GlideElement {
    new(): GlideElement_proto;
    readonly prototype: GlideElement_proto;
}
interface GlideElement_proto {
    /** Retrieves the choice list for a field */
    getChoices(dependent: string): [];
    /** Sets the display value of the field */
    setDisplayValue(value: any): void;
    /** Sets the display value of the field */
    setValue(value: any): void;
    /** Gets a GlideRecord object for a reference element */
    getRefRecord(): GlideRecord;
    /** Converts the value to a string */
    toString(): string;
    /** Gets the field's element descriptor */
    getED(): GlideElementDescriptor;
    /** Gets the decrypted value */
    getDecryptedValue(): string;
    /** Gets the formatted display value of the field */
    getDisplayValue(maxCharacters: number): string;
    /** Determines whether the field is null */
    nil(): boolean;
    /** Determines if the current field has been modified */
    changes(): boolean;
    /** Gets the object's label */
    getLabel(): string;
    /** Gets the name of the field */
    getName(): string;
    /** Gets the table name */
    getTableName(): string;
    /** Determines if the user's role permits creation of new records in this field */
    canCreate(): boolean;
    /** Determines if the GlideRecord table can be read from */
    canRead(): boolean;
    /** Determines if the GlideRecord table can be written to */
    canWrite(): boolean;
    /** Gets the value of the attribute on the field in question from the dictionary as a string. If the attribute is a boolean attribute, use getBooleanAttribute(String) to get the value as a boolean rather than as a string */
    getAttribute(attribute: string): string;
    /** Gets the value of the attribute on the field in question from the dictionary as a string. To get the value as a string, use getAttribute(string) */
    getBooleanAttribute(attribute: string): boolean;
    /** Determines whether a field has a particular attribute */
    hasAttribute(attribute: string): boolean;
    /** Adds an error message. Can be retrieved using getError() */
    setError(message: string): void;
    /** Gets table name for a reference field */
    getReferenceTable(): string;
    /** Determines if the new value of a field after a change matches a certain object */
    changesTo(value: any): boolean;
    /** Determines the previous value of the current field matched a certain object */
    changesFrom(value: any): boolean;
    /** Gets the currency ISO code for a record */
    getCurrencyCode(): string;
    /** Gets the currency display value */
    getCurrencyDisplayValue(): string;
    /** Gets currency in a string */
    getCurrencyString(): string;
    /** Gets a currency value */
    getCurrencyValue(): string;
    /** The currency ISO code, in the base system currency */
    getReferenceCurrencyCode(): string;
    /** Gets the display value */
    getReferenceDisplayValue(): string;
    /** Gets the reference value */
    getReferenceValue(): string;
    /** Gets the sessions currency ISO code */
    getSessionCurrencyCode(): string;
    /** Gets the currency value in the sessions currency format */
    getSessionDisplayValue(): string;
    /** Gets the ammount in the sessions currency */
    getSessionValue(): string;
    /** Sets a date to a numeric value */
    setDateNumericValue(value: any): void;
    /** Gets date in numberic value */
    dateNumericValue(value: string): number;
}
/** The scoped GlideElementDescriptor class provides information about individual fields */
declare const GlideElementDescriptor: GlideElementDescriptor;
interface GlideElementDescriptor {
    new(): GlideElementDescriptor_proto;
    readonly prototype: GlideElementDescriptor_proto;
}
interface GlideElementDescriptor_proto {
    /** Returns the field's name */
    getName(): string;
    /** Returns the field's data type */
    getInternalType(): string;
    /** Returns the field's label */
    getLabel(): string;
    /** Returns the field's length */
    getLength(): number;
}
/** Scoped GlideRecord is used for database operations instead of writing SQL queries. Provides data access APIs to retrieve, update, and delete records from a table */
declare var GlideRecord: GlideRecord;
interface GlideRecord {
    new(): GlideRecord_proto;
    readonly prototype: GlideRecord_proto;
}
interface GlideRecord_proto {
    /** Insert a new record using the field values that have been set for the current record */
    insert(): string;
    /** Runs the query against the table based on the specified filters by addQuery and addEncodedQuery */
    query(): void;
    /** Defines a GlideRecord based on the specified expression of name = value */
    get(name: any, value: any): boolean;
    /** Updates the current GlideRecord with any changes that have been made */
    update(reason: any): string;
    /** Updates each GlideRecord in the list with any changes that have been made */
    updateMultiple(): void;
    /** Deletes the current record */
    deleteRecord(): boolean;
    /** Deletes records that satisfy current query condition */
    deleteMultiple(): void;
    /** Sets the value for the specified field. */
    setValue(fieldName: string, value: any): void;
    /** Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted */
    setAbortAction(b: boolean): void;
    /** Enables and disables the running of business rules and script engines. When disabled, inserts and updates are not audited */
    setWorkflow(e: boolean): void;
    /** Adds a filter to return records by specifying a field and value. You can use an optional 'operator' as a second parameter */
    addQuery(name: string, value: string): GlideQueryCondition;
    /** Adds a filter to return active records */
    addActiveQuery(): GlideQueryCondition;
    /** Adds a filter to return records where the specified field is null */
    addNullQuery(fieldName: string): GlideQueryCondition;
    /** Adds a filter to return records where the specified field is not null */
    addNotNullQuery(fieldName: string): GlideQueryCondition;
    /** Adds a filter to return records based on a relationship in a related table */
    addJoinQuery(joinTable: string, primaryField: any, joinTableField: any): GlideQueryCondition;
    /** Retrieves the GlideElement for a specified field */
    getElement(fieldName: string): GlideElement;
    /** Retrieves the number of rows in the GlideRecord */
    getRowCount(): number;
    /** Retrieves the table name associated with this GlideRecord */
    getTableName(): string;
    /** Retrieves the class name for the current record */
    getRecordClassName(): string;
    /** Retrieves the query condition of the current result set as an encoded query string */
    getEncodedQuery(): string;
    /** Adds an encoded query to the other queries that may have been set */
    addEncodedQuery(query: string): void;
    /** Moves to the next record in the GlideRecord */
    next(): boolean;
    /** Determines if there are any more records in the GlideRecord */
    hasNext(): boolean;
    /** Retrieves the underlying value of a field */
    getValue(fieldName: string): string;
    /** Gets the primary key of the record, which is usually the sys_id unless otherwise specified */
    getUniqueValue(): string;
    /** Retrieves the name of the display field */
    getDisplayName(): string;
    /** Retrieves the display value for the current record */
    getDisplayValue(fieldName: string): string;
    getClassDisplayValue(): string;
    /** The label of the field as a String */
    getLabel(): string;
    /** Determines if current record is a valid record */
    isValidRecord(): boolean;
    /** Determines if the given field is defined in the current table */
    isValidField(fieldName: string): boolean;
    /** Creates an empty record suitable for population before an insert */
    initialize(): void;
    /** Creates a new GlideRecord, sets the default values for the fields, and assigns a unique ID to the record */
    newRecord(): void;
    /** Checks if the current record is a new record that has not yet been inserted into the database */
    isNewRecord(): boolean;
    /** Determines whether the table exists or not */
    isValid(): boolean;
    /** Retrieves the current operation being performed, such as insert, update, or delete */
    operation(): string;
    /** Specifies an orderBy column */
    orderBy(fieldName: string): void;
    /** Specifies a descending orderBy */
    orderByDesc(fieldName: string): void;
    /** Sets the maximum number of records in the GlideRecord to be fetched in the next query */
    setLimit(limit: number): void;
    /** Sets a range of rows to be returned by subsequent queries. If forceCount is true, getRowCount() method will return all possible records */
    chooseWindow(firstRow: number, lastRow: number, forceCount: boolean): void;
    /** Determines if the Access Control Rules which include the user's roles permit inserting new records in this table */
    canCreate(): boolean;
    /** Determines if the Access Control Rules which include the user's roles permit deleting records in this table */
    canDelete(): boolean;
    /** Determines if the Access Control Rules which include the user's roles permit reading records in this table */
    canRead(): boolean;
    /** Determines if the Access Control Rules which include the user's roles permit editing records in this table */
    canWrite(): boolean;
    /** Sets sys_id value for the current record */
    setNewGuidValue(guid: string): void;
    /** Retrieves a link to the current record */
    getLink(nostack: boolean): string;
    /** Retrieves the last error message */
    getLastErrorMessage(): string;
    /** Gets the attributes on the field in question from the dictionary */
    getAttribute(attribute: string): string;
    getCategory(): string;
    setCategory(category: string): void;
    autoSysFields(b: boolean): void;
    /** Determines whether the current database action is to be aborted. Available in Fuji patch 3 */
    isActionAborted(): boolean;
    /** Retrieve the specified platform function in addition of the field values */
    addFunction(functionDefinition: string): void;
}
declare const GlideRecordSecure: GlideRecordSecure;
interface GlideRecordSecure extends GlideRecord {
}
/** The scoped QueryCondition API provides additional AND or OR conditions that can be added to the current condition, allowing you to build complex queries such as: category='hardware' OR category='software' AND priority='2' AND priority='1' */
declare const GlideQueryCondition: GlideQueryCondition;
interface GlideQueryCondition {
    new(): GlideQueryCondition_proto;
    readonly prototype: GlideQueryCondition_proto;
}
interface GlideQueryCondition_proto {
    /** Adds an OR condition to the current condition. oper is an optional parameter */
    addOrCondition(name: string, oper: string, value: any): GlideQueryCondition;
    /** Adds an AND condition to the current condition. oper is an optional parameter */
    addCondition(name: string, oper: string, value: any): GlideQueryCondition;
}
/** The API allows you to evaluate scripts from a GlideRecord field */
declare const GlideScopedEvaluator: GlideScopedEvaluator;
interface GlideScopedEvaluator {
    new(): GlideScopedEvaluator_proto;
    readonly prototype: GlideScopedEvaluator_proto;
}
interface GlideScopedEvaluator_proto {
    /** Evaluates a script from a GlideRecord field. variables parameter is optional */
    evaluateScript(gr: GlideRecord, scriptField: string, variables: any): any;
    /** Puts a variable into the GlideScopedEvaluator object */
    putVariable(name: string, value: any): void;
    /** Gets a variable from a GlideScopedEvaluator object */
    getVariable(name: string): any;
}
declare const GlideScriptableInputStream: GlideScriptableInputStream;
interface GlideScriptableInputStream {
}
/** ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The GlideScriptedProcessor APIs are used in processor scripts to access the the processor (servlet) capabilities. There are no constructors for the GlideScriptedProcessor APIs. The methods are called using the global variable g_processor. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form */
declare const GlideScriptedProcessor: GlideScriptedProcessor;
interface GlideScriptedProcessor {
    new(): GlideScriptedProcessor_proto;
    readonly prototype: GlideScriptedProcessor_proto;
}
interface GlideScriptedProcessor_proto {
    /** Redirects to the specified URL */
    redirect(url: string): void;
    /** Writes the contents of the given string to the response */
    writeOutput(contentType: string, value: string): void;
    /** Writes a JSON object to the current URL. Note: Works only in scoped apps */
    writeJSON(jsonObject: any): void;
}
/** ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The GlideServletRequest API is used in processor scripts to access the HttpServletRequest object. The GlideServletRequest object provides a subset of the HttpServletRequest APIs. The methods are called using the global variable g_request. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form */
declare const GlideServletRequest: GlideServletRequest;
interface GlideServletRequest {
    new(): GlideServletRequest_proto;
    readonly prototype: GlideServletRequest_proto;
}
interface GlideServletRequest_proto {
    /** Returns the content type */
    getContentType(): string;
    /** Returns the header */
    getHeader(name: string): string;
    /** Returns an array of headers as a string */
    getHeaders(name: string): string[];
    /** Returns an array of header names as a string */
    getHeaderNames(): string[];
    /** Returns an object */
    getParameter(name: string): any;
    /** Returns an array of parameter names as a string */
    getParameterNames(): string[];
    /** Returns the query string from the request */
    getQueryString(): string;
}
/** ServiceNow processors are equivalent to Java servlets. Processors provide a customizable URL endpoint that can execute arbitrary server-side Javascript code and produce output such as TEXT, JSON, or HTML. The GlideServletResponse API is used in processor scripts to access the HttpServletResponse object. The GlideServletResponse object provides a subset of the HttpServletResponse APIs. The methods are called using the global variable g_response. A useful global variable, g_target, is available in processor scripts. It contains the table name extracted from the URL. The URL to a processor has the format: https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value> where the path endpoint and parameter endpoint are defined on the processor form */
declare const GlideServletResponse: GlideServletResponse;
interface GlideServletResponse {
    new(): GlideServletResponse_proto;
    readonly prototype: GlideServletResponse_proto;
}
interface GlideServletResponse_proto {
    /** Sends a temporary redirect to the client */
    sendRedirect(location: string): void;
    /** Sets the MIME type of the response */
    setContentType(type: string): void;
    /** Sets the status code for the response */
    setStatus(status: number): void;
    /** Sets a response header to the specified value */
    setHeader(key: string, value: string): void;
}
declare const GlideFilter: GlideFilter;
interface GlideFilter {
    /** Returns true when the record meets the filter condition */
    checkRecord(gr: GlideRecord, filter: string, value: boolean): boolean;
}
/** GlideLocale is a global object that can be called in scripts. Use the get() method to get a GlideLocale object */
declare const GlideLocale: GlideLocale;
interface GlideLocale {
    new(): GlideLocale_proto;
    readonly prototype: GlideLocale_proto;
    /** Returns the GlideLocale object */
    get(): GlideLocale;
}
interface GlideLocale_proto {
    /** Returns the grouping separator */
    getDecimalSeparator(): string;
    /** Returns the decimal separator */
    getGroupingSeparator(): string;
}
/** Scoped API for PluginManager */
declare const GlidePluginManager: GlidePluginManager;
interface GlidePluginManager {
    new(): GlidePluginManager_proto;
    readonly prototype: GlidePluginManager_proto;
}
interface GlidePluginManager_proto {
    /** Determine if a plugin is activated */
    isActive(pluginID: string): boolean;
}
/** The Scoped GlideTableHierarchy API provides methods for handling information about table relationships */
declare const GlideTableHierarchy: GlideTableHierarchy;
interface GlideTableHierarchy {
    new(): GlideTableHierarchy_proto;
    readonly prototype: GlideTableHierarchy_proto;
}
interface GlideTableHierarchy_proto {
    /** Returns the table's name */
    getName(): string;
    /** Returns a list of the table names in the hierarchy */
    getTables(): [];
    /** Returns a list of all tables that extend the current table */
    getTableExtensions(): [];
    /** Returns a list of all tables that extend the current table and includes the current table */
    getAllExtensions(): [];
    /** Returns a list of all classes in the hierarchy of the given table */
    getHierarchy(): [];
    /** Returns the top level class in the hierarchy */
    getRoot(): string;
    /** Returns the parent class */
    getBase(): string;
    /** Returns true if this is a base class */
    isBaseClass(): boolean;
    /** Returns true if this table is not in a hierarchy */
    isSoloClass(): boolean;
    /** Returns true of this class has been extended */
    hasExtensions(): boolean;
}
/** The Scoped GlideDBFunctionBuilder provides a builder API for creating platform function definition */
declare const GlideDBFunctionBuilder: GlideDBFunctionBuilder;
interface GlideDBFunctionBuilder {
    new(): GlideDBFunctionBuilder_proto;
    readonly prototype: GlideDBFunctionBuilder_proto;
}
interface GlideDBFunctionBuilder_proto {
    /** Add a field parameter to the current function */
    field(fieldName: string): GlideDBFunctionBuilder;
    /** Add a constant parameter to the current function */
    constant(constant: string): GlideDBFunctionBuilder;
    /** End the current function */
    endfunc(): GlideDBFunctionBuilder;
    /** Return the completed function definition */
    build(): string;
    /** Start a length function */
    length(): GlideDBFunctionBuilder;
    /** Start a concatenation function */
    concat(): GlideDBFunctionBuilder;
    /** Start an addition function */
    add(): GlideDBFunctionBuilder;
    /** Start a subtraction function */
    subtract(): GlideDBFunctionBuilder;
    /** Start a multiplication function */
    multiply(): GlideDBFunctionBuilder;
    /** Start a division function */
    divide(): GlideDBFunctionBuilder;
    /** Start a function that return the duration between 2 dates */
    datediff(): GlideDBFunctionBuilder;
    /** Start a function that returns the day of the week of a given date */
    dayofweek(): GlideDBFunctionBuilder;
    /** Start a function that returns the current timestamp in the UTC timezone. This function should be used as a parameter to the datediff function to calculate a duration between the current datetime and another datetime field or datetime constant */
    now(): GlideDBFunctionBuilder;
}
/** XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string. Use this JavaScript class to instantiate an object from an XML string, usually a return value from a Web Service invocation, or the XML payload of ECC Queue */
declare const XMLDocument2: XMLDocument2;
interface XMLDocument2 {
    new(): XMLDocument2_proto;
    readonly prototype: XMLDocument2_proto;
}
interface XMLDocument2_proto {
    /** Gets the node specified in the xpath */
    getNode(xpath: string): XMLNode;
    /** Gets the first node in the specified xpath */
    getFirstNode(xpath: string): XMLNode;
    /** Gets the node after the specified node */
    getNextNode(prev: XMLNode): XMLNode;
    /** Creates and adds an element node to the current node. The element name is the string passed in as a parameter. The new element node has no text child nodes */
    createElement(name: string): XMLNode;
    /** Creates an element node with a text child node and adds it to the current node */
    createElementWithTextValue(name: string, value: string): XMLNode;
    /** Makes the node passed in as a parameter the current node */
    setCurrentElement(element: XMLNode): void;
    /** Gets the document element node of the XMLDocument2. The document element node is the root node */
    getDocumentElement(): XMLNode;
    /** Parses the XML string and loads it into the XMLDocument2 object */
    parseXML(xmlDoc: string): boolean;
    /** Gets all the text child nodes from the node referenced in the xpath */
    getNodeText(xpath: string): string;
    /** Checks if the XMLDocument is valid */
    isValid(): boolean;
    /** Returns a string containing the XML */
    toString(): string;
}
/** The scoped XMLNode API allows you to query values from XML nodes. XMLNodes are extracted from XMLDocument2 objects, which contain XML strings */
declare const XMLNode: XMLNode;
interface XMLNode {
    new(): XMLNode_proto;
    readonly prototype: XMLNode_proto;
}
interface XMLNode_proto {
    /** Gets the node's last child node */
    getLastChild(): XMLNode;
    /** Gets the node's first child node */
    getFirstChild(): XMLNode;
    /** Gets the node's XMLNodeIterator object */
    getChildNodeIterator(): XMLNodeIterator;
    /** Gets the node's text content */
    getTextContent(): string;
    /** Gets the node's value */
    getNodeValue(): string;
    /** Gets the node's name */
    getNodeName(): string;
    /** Determines if the node has the specified attribute */
    hasAttribute(attribute: string): boolean;
    /** Gets the value of the specified attribute */
    getAttribute(attribute: string): string;
    setAttribute(attribute: string, value: string): void;
    appendChild(newChild: XMLNode): void;
    /** Gets the node's string value */
    toString(): string;
}
/** The scoped XMLNodeIterator class allows you to iterate through a node of a XML document */
declare const XMLNodeIterator: XMLNodeIterator;
interface XMLNodeIterator {
    new(): XMLNodeIterator_proto;
    readonly prototype: XMLNodeIterator_proto;
}
interface XMLNodeIterator_proto {
    /** Gets the next element in the iteration */
    next(): XMLNode;
    /** Determines if the iteration has more elements */
    hasNext(): boolean;
}
/** The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc. */
declare const gs: gs;
interface gs {
    /** Returns a reference to the GlideUser object for the current user */
    getUser(): GlideUser;
    /** Gets a reference to the current Glide session */
    getSession(): GlideSession;
    /** Queues an event for the event manager */
    eventQueue(name: string, record: GlideRecord, parm1: string, parm2: string, queue: string): void;
    /** Retrieves a message from UI messages */
    /** Deprecated -- use getPropertySecured instead */
    getProperty(key: string, alt: Object): string;
    getPropertySecured(key: string, alt: Object): string;
    urlDecode(url: string): string;
    urlEncode(url: string): string;
    base64Decode(s: string): string;
    base64Encode(s: string): string;
    xmlToJSON(xmlString: string): Object;
    /** Gets the name of the current scope */
    getCurrentScopeName(): string;
    /** Gets the caller scope name, or returns null if there is no caller */
    getCallerScopeName(): string;
    /** Queries an object and returns true if the object is null, undefined, or contains an empty string */
    nil(o: Object): boolean;
    /** Retrieves a message from UI messages. args is an optional paramter */
    getMessage(id: string, args: any): string;
    /** Determines if the current user has the specified role */
    hasRole(role: string): boolean;
    /** Provides a safe way to call from the sandbox, allowing only trusted scripts to be included */
    include(name: string): boolean;
    /** Gets the GlideSession Session ID */
    getSessionID(): string;
    /** Determines if a database table exists */
    tableExists(name: string): boolean;
    /** Gets a string representing the cache version for a CSS file */
    getCssCacheVersionString(): string;
    /** Generates a GUID that can be used when a unique identifier is required */
    generateGUID(obj: Object): string;
    getNewAppScopeCompanyPrefix(): string;
    getMaxSchemaNameLength(): number;
    /** Adds an error message for the current session */
    addErrorMessage(message: string): void;
    /** Adds an info message for the current session */
    addInfoMessage(message: string): void;
    /** Gets the display name of the current user (e.g., Abel Tuter, as opposed to abel.tuter) */
    getUserDisplayName(): string;
    /** Gets the sys_id of the current user */
    getUserID(): string;
    /** Gets the username, or User ID, of the current user (e.g., abel.tuter) */
    getUserName(): string;
    /** Set the redirect URI for this transaction. This determines the next page the user will see */
    setRedirect(url: string): void;
    /** Checks if the current session is interactive */
    isInteractive(): boolean;
    /** Determines if the current user is currently logged in */
    isLoggedIn(): boolean;
    /** Gets the current URI for the session */
    getUrlOnStack(): string;
    /** Gets the ID of current application, defined as a user preference and set by the application picker */
    getCurrentApplicationId(): string;
    /** Returns (UTC) 24 hours ago adjusted for the timezone of the current session */
    yesterday(): string;
    /** Returns the (UTC) start of the day that was the specified number of days ago adjusted for the timezone of the server */
    daysAgo(days: number): string;
    /** Returns the (UTC) start of the day that was the specified number of days ago adjusted for the timezone of the server */
    daysAgoStart(daysAgo: number): string;
    /** Returns the (UTC) end of the day that was the specified number of days ago adjusted for the timezone of the server */
    daysAgoEnd(daysAgo: number): string;
    /** Returns the (UTC) beginning of the specified week adjusted for the timezone of the current session */
    beginningOfWeek(o: Object): string;
    /** Returns the (UTC) end of the specified week adjusted for the timezone of the current session */
    endOfWeek(o: Object): string;
    /** Returns the (UTC) end of next week adjusted for the timezone of the server */
    endOfNextWeek(): string;
    /** Gets the date and time for the beginning of next week in UTC, adjusted for the timezone of the server */
    beginningOfNextWeek(): string;
    /** Returns the (UTC) end of last week adjusted for the timezone of the server */
    endOfLastWeek(): string;
    /** Gets the date and time for the beginning of last week in UTC, adjusted for the timezone of the server */
    beginningOfLastWeek(): string;
    /** Gets the date and time for the beginning of this week in UTC, adjusted for the timezone of the server */
    beginningOfThisWeek(): string;
    /** Gets the date and time for the end of this week in UTC, adjusted for the timezone of the server */
    endOfThisWeek(): string;
    /** Gets the date and time for the beginning of this month in UTC, adjusted for the timezone of the server */
    beginningOfThisMonth(): string;
    /** Gets the date and time for the end of this month in UTC, adjusted for the timezone of the server */
    endOfThisMonth(): string;
    /** Gets the date and time for the beginning of next month in UTC, adjusted for the timezone of the server */
    beginningOfNextMonth(): string;
    /** Gets the date and time for the end of next month in UTC, adjusted for the timezone of the server */
    endOfNextMonth(): string;
    /** Gets the date and time for the beginning of last month in UTC, adjusted for the timezone of the server */
    beginningOfLastMonth(): string;
    /** Gets the date and time for the end of last month in UTC, adjusted for the timezone of the server */
    endOfLastMonth(): string;
    /** Returns the (UTC) start of the quarter that was the specified number of months ago adjusted for the timezone of the server */
    monthsAgo(month: number): string;
    /** Returns the (UTC) start of the quarter that was the specified number of months ago adjusted for the timezone of the server */
    monthsAgoStart(month: number): string;
    /** Gets the date and time for the beginning of this quarter in UTC, adjusted for the timezone of the server */
    beginningOfThisQuarter(): string;
    /** Gets the date and time for the end of this quarter in UTC, adjusted for the timezone of the server */
    endOfThisQuarter(): string;
    /** Returns the (UTC) start of the quarter that was the specified number of quarters ago adjusted for the timezone of the server */
    quartersAgoStart(quarters: number): string;
    /** Returns the (UTC) end of the quarter that was the specified number of quarters ago adjusted for the timezone of the server */
    quartersAgoEnd(quarters: number): string;
    /** Gets the date and time for the beginning of this year in UTC, adjusted for the timezone of the server */
    beginningOfThisYear(): string;
    /** Gets the date and time for the end of this year in UTC, adjusted for the timezone of the server */
    endOfThisYear(): string;
    /** Gets the date and time for the beginning of last year in UTC, adjusted for the timezone of the server */
    beginningOfLastYear(): string;
    /** Gets the date and time for the end of last year in UTC, adjusted for the timezone of the server */
    endOfLastYear(): string;
    /** Gets the date and time for the beginning of next year in UTC, adjusted for the timezone of the server */
    beginningOfNextYear(): string;
    /** Gets the date and time for the end of next year in UTC, adjusted for the timezone of the server */
    endOfNextYear(): string;
    /** Returns the (UTC) start of the hour that was the specified number of hours ago adjusted for the timezone of the server */
    hoursAgoStart(hours: number): string;
    /** Returns the (UTC) end of the hour that was the specified number of hours ago adjusted for the timezone of the server */
    hoursAgoEnd(hours: number): string;
    /** number of hours ago */
    hoursAgo(hours: number): string;
    /** number of minutes ago */
    minutesAgo(minutes: number): string;
    /** Returns the (UTC) start of the minute that was the specified number of minutes ago adjusted for the timezone of the serve */
    minutesAgoStart(minutes: number): string;
    /** Returns the (UTC) end of the minute that was the specified number of minutes ago adjusted for the timezone of the serve */
    minutesAgoEnd(minutes: number): string;
    /** Returns the date of the duration time after January 1 */
    getDurationDate(duration: string): string;
    /** Returns a String of the form :interval,value,operator */
    datePart(interval: string, value: string, operator: string): string;
    /** Uses the error level to log a message to the system log */
    error(message: string, parm1: Object, parm2: Object, parm3: Object, parm4: Object, parm5: Object): void;
    /** Uses the warn level to log a message to the system log */
    warn(message: string, parm1: Object, parm2: Object, parm3: Object, parm4: Object, parm5: Object): void;
    /** Uses the info level to log a message to the system log */
    info(message: string, parm1: Object, parm2: Object, parm3: Object, parm4: Object, parm5: Object): void;
    /** Uses the debug level to log a message to the system log */
    debug(message: string, parm1: Object, parm2: Object, parm3: Object, parm4: Object, parm5: Object): void;
    /** Determines if debugging is active for a specific scope */
    isDebugging(): boolean;
    /** Determines if the UI is running as mobile */
    isMobile(): boolean;
}
/** Authentication API */
declare const sn_auth: sn_auth;
interface sn_auth {
    GlideOAuthClient: GlideOAuthClient;
    GlideOAuthClientRequest: GlideOAuthClientRequest;
    GlideOAuthToken: GlideOAuthToken;
    GlideOAuthClientResponse: GlideOAuthClientResponse;
}
/** The OAuth client API provides methods to request and revoke OAuth tokens */
interface GlideOAuthClient {
    new(): GlideOAuthClient_proto;
    readonly prototype: GlideOAuthClient_proto;
}
interface GlideOAuthClient_proto {
    /** Retrieves the token for the client, with the request parameters encoded in JSON format */
    requestToken(clientName: string, jsonString: string): GlideOAuthClientResponse;
    /** Retrieves the token for the client, with the request and optional header parameters set into a GlideOAuthClientRequest object */
    requestTokenByRequest(clientName: string, request: GlideOAuthClientRequest): GlideOAuthClientResponse;
    /** Revokes the access or refresh token for the client, with the request and optional header parameters set into a GlideOAuthClientRequest object */
    revokeToken(clientName: string, accessToken: string, refreshToken: string, request: GlideOAuthClientRequest): GlideOAuthClientResponse;
}
/** Use these methods for handling client requests */
interface GlideOAuthClientRequest {
    new(): GlideOAuthClientRequest_proto;
    readonly prototype: GlideOAuthClientRequest_proto;
}
interface GlideOAuthClientRequest_proto {
    /** Retrieves the parameter for the parameter name you provide */
    getParameter(name: string): void;
    /** Sets the parameters for the name:value pair of strings you provide */
    setParameter(name: string, value: string): void;
    /** Retrieves the HTTP headers */
    getHeaders(): any;
    /** Retrieves the HTTP headers for the string you provide */
    getHeader(name: string): void;
    /** Sets the HTTP headers for the nave:value pair that you provide */
    setHeader(name: string, value: string): void;
    /** Retrieves the grant type */
    getGrantType(): void;
    /** Sets the grant type with the string you provide */
    setGrantType(): void;
    /** Retrieves the scope */
    getScope(): string;
    /** Sets the scope with the string you provide */
    setScope(scope: string): void;
    /** Retrieves the user name */
    getUserName(): string;
    /** Sets the user name with the string you provide */
    setUserName(userName: string): void;
    /** Retrieves the password */
    getPassword(): string;
    /** Sets the password with the string you provide */
    setPassword(password: string): void;
    /** Retrieves the refresh token */
    getRefreshToken(): string;
    /** Sets the refresh token with the string you provide */
    setRefreshToken(refreshToken: string): void;
}
/** Use these methods for retrieving the access token and information about the access token */
interface GlideOAuthToken {
    new(): GlideOAuthToken_proto;
    readonly prototype: GlideOAuthToken_proto;
}
interface GlideOAuthToken_proto {
    /** Retrieves the access token */
    getAccessToken(): string;
    /** Retrieves the sys_id of the token ID */
    getAccessTokenSysID(): string;
    /** Retrieves the lifespan of the access token in seconds */
    getExpiresIn(): number;
    /** Retrieves the refresh token */
    getRefreshToken(): number;
    /** Retrieves the sys_id of the refresh token */
    getRefreshTokenSysID(): string;
    /** Retrieves the scope, which is the amount of access granted by the access token */
    getScope(): string;
}
interface GlideOAuthClientResponse {
    new(): GlideOAuthClientResponse_proto;
    readonly prototype: GlideOAuthClientResponse_proto;
}
interface GlideOAuthClientResponse_proto {
    /** Retrieves the refresh token */
    getToken(): GlideOAuthToken;
    /** Retrieves the error message if authentication is not successful */
    getErrorMessage(): string;
    /** Retrieves the response content from an external OAuth provider. The response is in a name:value pair */
    getResponseParameters(): any;
    /** Retrieves the HTTP response content header from an external OAuth provider */
    getContentType(): string;
    /** Retrieves all of the response information, including instance information */
    getBody(): string;
    /** Retrieves the HTTP response code from the external OAuth provider */
    getResponseCode(): string;
}
/** Web Services API, to send a message to a web service provider */
declare const sn_ws: sn_ws;
interface sn_ws {
    RESTMessageV2: RESTMessageV2;
    RESTResponseV2: RESTResponseV2;
    SOAPMessageV2: SOAPMessageV2;
    SOAPResponseV2: SOAPResponseV2;
}
/** Instantiates a RESTMessageV2 object. When you have a REST message record, you can add the optional name and methodName information */
interface RESTMessageV2 {
    new(): RESTMessageV2_proto;
    readonly prototype: RESTMessageV2_proto;
}
interface RESTMessageV2_proto {
    /** Send the REST message to the endpoint */
    execute(): RESTResponseV2;
    /** Send the REST message to the endpoint asynchronously. The instance does not wait for a response from the web service provider when making asynchronous calls */
    executeAsync(): RESTResponseV2;
    /** The HTTP method this REST message performs, such as GET or PUT. You must set an HTTP method when using the RESTMessageV2() constructor with no parameters */
    setHttpMethod(method: string): void;
    /** Set the amount of time the REST message waits for a response from the REST provider */
    setHttpTimeout(timeoutMs: number): void;
    /** Set basic authentication headers for the REST message */
    setBasicAuth(userName: string, userPass: string): void;
    /** Set the mutual authentication protocol profile for the REST message */
    setMutualAuth(profileName: string): void;
    /** Set the credentials for the REST message using an existing basic auth or OAuth 2.0 profile. Valid types are 'basic' and 'oauth2'. Valid profileIds are the sys_id of a Basic Auth Configuration [sys_auth_profile_basic] record or an OAuth Entity Profile [oauth_entity_profile] record */
    setAuthenticationProfile(type: string, profileId: string): void;
    /** Associate outbound requests and the resulting response record in the ECC queue */
    setEccCorrelator(correlator: string): void;
    /** Override a value from the database by writing to the REST message payload */
    setEccParameter(name: string, value: string): void;
    /** Configure the REST message to communicate through a MID Server */
    setMIDServer(midServer: string): void;
    /** Set the endpoint for the REST message */
    setEndpoint(endpoint: string): void;
    /** Set the ECC topic for the REST message. The default ECC topic is RESTProbe if topic is not set. In most cases it is unnecessary to set ECC topic */
    setEccTopic(topic: string): void;
    /** Set the body content of a PUT or POST request. Mutually exclusive with setRequestBodyFromAttachment */
    setRequestBody(body: string): void;
    /** Uses the specified attachment as the request body of this REST Message. Mutually exclusive with setRequestBody */
    setRequestBodyFromAttachment(attachmentSysId: string): void;
    /** Setup the response body to be saved into the specified attachment when the request is sent. encryptCtxSysId is optional */
    saveResponseBodyAsAttachment(tableName: string, recordSysId: string, filename: string, encryptCtxSysId: string): void;
    /** Set an HTTP header to the specified value */
    setRequestHeader(name: string, value: string): void;
    /** Set a REST message function variable to the specified value */
    setStringParameter(name: string, value: string): void;
    /** Set a REST message function variable to the specified value without escaping XML reserved characters */
    setStringParameterNoEscape(name: string, value: string): void;
    /** Append a name-value parameter to the request URL */
    setQueryParameter(name: string, value: string): void;
    /** Get the content of the REST message body */
    getRequestBody(): string;
    /** Get the URL of the endpoint for the REST message */
    getEndpoint(): string;
    /** Get the ECC topic for the REST message */
    getEccTopic(): string;
    /** Get the value for an HTTP header specified by the REST client */
    getRequestHeader(headerName: string): string;
    /** Get name and value for all HTTP headers specified by the REST client */
    getRequestHeaders(): Object;
}
/** The RESTResponseV2 API allows you to use the data returned by an outbound REST message in JavaScript code. A RESTResponseV2 object is returned by the RESTMessageV2 functions execute() and executeAsync() */
interface RESTResponseV2 {
    new(): RESTResponseV2_proto;
    readonly prototype: RESTResponseV2_proto;
}
interface RESTResponseV2_proto {
    /** Set the amount of time the instance waits for the response */
    waitForResponse(timeoutSecs: number): void;
    /** Get the numeric HTTP status code returned by the REST provider */
    getStatusCode(name: string): number;
    /** Get the value for a specified header */
    getHeader(name: string): string;
    /** Deprecated -- use getAllHeaders instead */
    getHeaders(): Object;
    /** Get all headers returned in the REST response and the associated values */
    getAllHeaders(): GlideHTTPHeader[];
    /** Get the content of the REST response body */
    getBody(): string;
    /** Indicate if there was an error during the REST transaction */
    haveError(): boolean;
    /** Get the numeric error code, if there was an error during the REST transaction */
    getErrorCode(): number;
    /** Get the error message if there was an error during the REST transaction */
    getQueryString(): string;
    /** Get the query used for this request */
    getErrorMessage(): string;
}
/** Instantiates a SOAPMessageV2 object. Specify optional message and a function if there is a SOAP message record */
interface SOAPMessageV2 {
    new(): SOAPMessageV2_proto;
    readonly prototype: SOAPMessageV2_proto;
}
interface SOAPMessageV2_proto {
    /** Send the SOAP Message to the endpoint */
    execute(): SOAPResponse;
    /** Send the SOAP Message to the endpoint asynchronously */
    executeAsync(): SOAPResponse;
    /** Define the SOAP action this SOAP message performs */
    setSOAPAction(soapAction: string): void;
    /** Set the amount of time the request waits for a response from the web service provider before the request times out */
    setHttpTimeout(timeoutMs: number): void;
    /** Set basic authentication headers for the SOAP message */
    setBasicAuth(userName: string, userPass: string): void;
    /** Set the mutual authentication protocol profile for the SOAP message */
    setMutualAuth(profileName: string): void;
    /** Set web service security values for the SOAP message */
    setWSSecurity(keystoreId: string, keystoreAlias: string, keystorePassword: string, certificateId: string): void;
    /** Set a variable from the SOAP message record to the specified value */
    setStringParameter(name: string, value: string): void;
    /** Set a variable from the SOAP message record to the specified value without escaping XML reserved characters */
    setStringParameterNoEscape(name: string, value: string): void;
    /** Associate outbound requests and the resulting response record in the ECC queue */
    setEccCorrelator(correlator: string): void;
    /** Override a value from the database by writing to the SOAP message payload */
    setEccParameter(name: string, value: string): void;
    /** Set an HTTP header in the SOAP message to the specified value */
    setRequestHeader(headerName: string, headerValue: string): void;
    /** Set the body content to send to the web service provider */
    setRequestBody(requestBody: string): void;
    /** Set the endpoint for the SOAP message */
    setEndpoint(endpoint: string): void;
    /** Configure the SOAP message to be sent through a MID Server */
    setMIDServer(midServerName: string): void;
    /** Get the content of the SOAP message body */
    getRequestBody(): string;
    /** Get the URL of the endpoint for the SOAP message */
    getEndpoint(): string;
    /** Get the value for an HTTP header specified by the SOAP client */
    getRequestHeader(headerName: string): string;
    /** Get name and value for all HTTP headers specified by the SOAP client */
    getRequestHeaders(): Object;
    /** Set WS-Security Username token */
    setWSSecurityUsernameToken(username: string, password: string): void;
    /** Set WS-Security X.509 token */
    setWSSecurityX509Token(keystoreId: string, keystoreAlias: string, keystorePassword: string, certificateId: string): void;
}
/** The SOAPResponseV2 API allows you to use the data returned by an outbound SOAP message in JavaScript code. A SOAPResponseV2 object is returned by the SOAPMessageV2 functions execute() and executeAsync() */
interface SOAPResponseV2 {
    new(): SOAPResponseV2_proto;
    readonly prototype: SOAPResponseV2_proto;
}
interface SOAPResponseV2_proto {
    /** Set the amount of time the instance waits for a response */
    waitForResponse(timeoutSecs: number): void;
    /** Get the numeric HTTP status code returned by the SOAP provider */
    getStatusCode(): number;
    /** Get the value for a specified HTTP header */
    getHeader(name: string): string;
    /** Deprecated -- use getAllHeaders instead */
    getHeaders(): Object;
    /** Get all HTTP headers returned in the SOAP response and the associated values */
    getAllHeaders(): GlideHTTPHeader[];
    /** Get the content of the SOAP response body */
    getBody(): string;
    /** Indicate if there was an error during the SOAP transaction */
    haveError(): boolean;
    /** Get the numeric error code if there was an error during the SOAP transaction */
    getErrorCode(): number;
    /** Get the error message if there was an error during the SOAP transaction */
    getErrorMessage(): string;
}
interface GlideHTTPHeader { }
interface SOAPResponse { }
/** These objects are relevant to Scripted REST APIs and are accessed via the request or response input parameters to Scripted APIs */
declare const sn_ws_int: sn_ws_int;
interface sn_ws_int {
    RESTAPIRequest: RESTAPIRequest;
    RESTAPIRequestBody: RESTAPIRequestBody;
    RESTAPIResponse: RESTAPIResponse;
    RESTAPIResponseStream: RESTAPIResponseStream;
    WSRequest: WSRequest;
    WSResponse: WSResponse;
    /** SOAP request object as a String */
    WSSoapRequestXML: string;
    /** SOAP request object as a DOM Document or XMLDocument2 (for new application scope) */
    WSSoapRequestDocument: WSSoapRequestDocument;
}
/** Allows you to access request details in Scripted REST APIs */
interface RESTAPIRequest {
    new(): RESTAPIRequest_proto;
    readonly prototype: RESTAPIRequest_proto;
}
interface RESTAPIRequest_proto {
    /** The body of the request */
    body: body;
    /** Get the value of a specific header from the request */
    getHeader(headerName: string): string;
    /** The entire request URL, including domain */
    url: string;
    /** The request URI, excluding domain information */
    uri: string;
    /** The entire query string from the request URI */
    queryString: string;
    /** Obtain a set of media types that are common between what the client request accepts and what this service is able to produce */
    getSupportedResponseContentTypes(): Object;
    /** Get the query category (i.e. read replica category) from query parameter 'sysparm_query_category' */
    getRequestedQueryCategory(): string;
}
/** Allows you to access the request body as a stream, as a string, de-serialized into an object, or as an array of obects */
interface RESTAPIRequestBody {
    new(): RESTAPIRequestBody_proto;
    readonly prototype: RESTAPIRequestBody_proto;
}
interface RESTAPIRequestBody_proto {
    /** The body of the request as a stream. Note, this object provides no functions to manipulate the stream from script. Rather this object can be passed to another API which takes an InputStream as an input parameter */
    dataStream: dataStream;
    /** The request body as a string -- be careful to consider impact to memory */
    dataString: string;
    /** Returns the next entry from the request body as an object if request is array. If not an array then returns entire request body as an object */
    nextEntry(): Object;
    /** Return true if request has more entries. Use this in conjunction with nextEntry */
    hasNext(): boolean;
}
/** Allows you to configure the HTTP response in Scripted REST APIs */
interface RESTAPIResponse {
    new(): RESTAPIResponse_proto;
    readonly prototype: RESTAPIResponse_proto;
}
interface RESTAPIResponse_proto {
    /** Set response HTTP status code */
    setStatus(code: number): void;
    /** Set response headers from the specified object */
    setHeaders(headers: any): void;
    /** Set a response header */
    setHeader(name: string, value: string): void;
    /** Set the Location header */
    setLocation(locationValue: string): void;
    /** Set the Content-Type header */
    setContentType(contentType: string): void;
    /** Set Response Error */
    setError(error: any): void;
    /** Use the specified object as the response body */
    setBody(body: any): void;
    /** Return stream writer. Caller responsible to set proper content type and status using setStatus and setHeader methods. Caller responsible to populate all headers on response before actually writing to stream */
    getStreamWriter(): RESTAPIResponseStream;
}
/** Allows you to write streams or strings directly to the response stream in a Scripted REST API */
interface RESTAPIResponseStream {
    new(): RESTAPIResponseStream_proto;
    readonly prototype: RESTAPIResponseStream_proto;
}
interface RESTAPIResponseStream_proto {
    /** Write a string directly to the response stream. Can be called multiple times. Caller responsible for response format and setting proper Content-Type and status code prior to calling */
    writeString(stringToWrite: string): void;
    /** Write an InputStream directly to the response stream. Can be called multiple times. Caller responsible for response format and setting proper Content-Type and status code prior to calling */
    writeStream(inputStream: Object): void;
}
/** Provides access to request input parameters */
interface WSRequest {
    new(): WSRequest_proto;
    readonly prototype: WSRequest_proto;
}
interface WSRequest_proto {
}
/** Allows setting response output parameters */
interface WSResponse {
    new(): WSResponse_proto;
    readonly prototype: WSResponse_proto;
}
interface WSResponse_proto {
}
interface WSSoapRequestDocument extends Object { }
interface body extends RESTAPIRequestBody { }
interface dataStream extends GlideScriptableInputStream { }
/** Error types which can be set as the response body of a Scripted REST API */
declare const sn_ws_err: sn_ws_err;
interface sn_ws_err {
    /** Sets status code 404 and includes the specified message in the response */
    NotFoundError(message: string): void;
    /** Sets status code 409 and includes the specified message in the response */
    ConflictError(message: string): void;
    /** Sets status code 415 and includes the specified message in the response */
    UnsupportedMediaTypeError(message: string): void;
    /** Sets status code 406 and includes the specified message in the response */
    NotAcceptableError(message: string): void;
    /** Sets status code 400 and includes the specified message in the response */
    BadRequestError(message: string): void;
    ServiceError: ServiceError;
}
/** A generic error message wrapper to set status code and detailed error message in the response */
interface ServiceError {
    new(): ServiceError_proto;
    readonly prototype: ServiceError_proto;
}
interface ServiceError_proto {
    /** The response status code -- defaults to 500 */
    setStatus(code: number): void;
    /** The error message */
    setMessage(message: string): void;
    /** The detailed error message */
    setDetail(detail: string): void;
}
/** MetricBase JavaScript API */
declare const sn_clotho: sn_clotho;
interface sn_clotho {
    Transformer: Transformer;
    TransformPart: TransformPart;
    TransformResult: TransformResult;
    Data: Data;
    Client: Client;
    DataBuilder: DataBuilder;
}
/** Instantiates a MetricBase transformer for the specified GlideRecord */
interface Transformer {
    new(): Transformer_proto;
    readonly prototype: Transformer_proto;
}
interface Transformer_proto {
    /** Groups the subject records by the specified field */
    groupBy(field: string): TransformPart;
    /** Specifies the metric field that this transformer operates on */
    metric(metricName: string): TransformPart;
    /** Executes the transforms defined by this transformer over the specified time range and returns an object containing the results */
    execute(rangeStart: GlideDateTime, rangeEnd: GlideDateTime): TransformResult;
}
/** Defines a transformer's transforms */
interface TransformPart {
    new(): TransformPart_proto;
    readonly prototype: TransformPart_proto;
}
interface TransformPart_proto {
    /** Groups the subject records by the specified field */
    groupBy(field: string): TransformPart;
    /** Specifies the metric field that this transformer operates on */
    metric(metricName: string): TransformPart;
    /** Includes this intermediate transform as part of the result */
    collect(): TransformPart;
    /** Produces a new series where each value is the average of all of the values at each timestamp */
    avg(): TransformPart;
    /** Produces a new series where each value is the sum of all of the values at each timestamp */
    sum(): TransformPart;
    /** Labels this series */
    label(label: string): TransformPart;
    /** Produces a new series that counts the number of series with values in the input */
    count(): TransformPart;
    /** Adds the specified constant quantity to all values */
    add(summand: number): TransformPart;
    /** Subtracts the specified constant quantity from all values */
    sub(substrahend: number): TransformPart;
    /** Multiplies all values by the specified constant quantity */
    mul(factor: number): TransformPart;
    /** Divides all values by the specified constant quantity */
    div(divisor: number): TransformPart;
    /** Performs a logarithm on all values with the specified constant base */
    log(base: number): TransformPart;
    /** Aligns all series to have the specified number of data points */
    resample(numValues: number): TransformPart;
    /** Produces a set of new series by specified condition */
    where(condition: Condition): TransformPart;
    /** Populates missing (NaN) values with two-point linear regression using the specified tolerance for maximum range of missing data */
    interpolate(countOrDuration: Object): TransformPart;
    /** Produces a set of series with the top 'count' (specified) largest values at each timestamp */
    top(count: number): TransformPart;
    /** Produces a set of series with the bottom 'count' (specified) smallest values at each timestamp */
    bottom(count: number): TransformPart;
    /** Produces a new series with the smallest values at each timestamp */
    min(): TransformPart;
    /** Produces a new series with the largest values at each timestamp */
    max(): TransformPart;
    /** Produces a new series with the standard deviation of the values at each timestamp */
    stddev(): TransformPart;
    /** Produces a new series with the median of the values at each timestamp */
    median(): TransformPart;
    /** Produces a new series with the values filtered (AVG, MAX, MIN or LAST) by sliding windows */
    filter(_aggregator: string, _window: string): TransformPart;
    /** Fits the series to the specified model using the specified parameters */
    fit(_params: Object): TransformPart;
    /** Produces a new series with the values filtered (AVG, MAX, MIN or LAST) by non-overlapping windows */
    partition(_aggregator: string, _window: string, _base: string): TransformPart;
    /** Produces a set of series where each is one of the specified percentiles of all of the data */
    fractiles(fractions: number[]): TransformPart;
    /** Rounds all values to the specified precision */
    round(precision: number): TransformPart;
    /** Ceils all values to the specified precision */
    ceil(precision: number): TransformPart;
    /** Floors all values to the specified precision */
    floor(precision: number): TransformPart;
    /** Limits the number of data points in each series to the specified count */
    limit(count: number): TransformPart;
}
/** An object that contains a transform execution result */
interface TransformResult {
    new(): TransformResult_proto;
    readonly prototype: TransformResult_proto;
}
interface TransformResult_proto {
    /** Returns a series with the specified label */
    getByLabel(label: string): Data;
    /** Returns the all series of this TransformResult in the form of an array */
    toArray(): Data[];
    /** Returns this result's series, assuming that there is a single resultant series */
    getData(): Data;
    /** Returns a mapping of group names to their series */
    byGroup(): map;
}
/** Stores a single series of MetricBase data */
interface Data {
    new(): Data_proto;
    readonly prototype: Data_proto;
}
interface Data_proto {
    /** Returns the label of this series */
    getLabel(): string;
    /** Returns the name of the metric this series operates on */
    getMetricName(): string;
    /** Returns the name of the table this series operates on */
    getTableName(): string;
    /** Returns the value of the subject this series operates on */
    getSubject(): string;
    /** Returns the start time of this series */
    getStart(): GlideDateTime;
    /** Returns the end time of this series */
    getEnd(): GlideDateTime;
    /** Returns the period of this series */
    getPeriod(): number;
    /** Returns the number of values in this series */
    size(): number;
    /** Returns the values in this series in the form of an array of numbers */
    getValues(): number[];
    /** Converts this series into a model string */
    toModelString(): string;
    /** Converts the specified model string into a series */
    fromModelString(model: string): Data;
}
/** Interacts with the MetricBase database */
interface Client {
    new(): Client_proto;
    readonly prototype: Client_proto;
}
interface Client_proto {
    /** Uses the specified DataBuilder to put data into MetricBase */
    put(dataBuilder: DataBuilder): void;
    /** Performs the specified transform(s) over the specified range */
    transform(o1: Object, o2: GlideDateTime, o3: GlideDateTime): Object;
}
/** Builds data to put into MetricBase */
interface DataBuilder {
    new(): DataBuilder_proto;
    readonly prototype: DataBuilder_proto;
}
interface DataBuilder_proto {
    /** Adds the specified value to the data at the specified time */
    add(start: GlideDateTime, value: number): DataBuilder;
}
interface Condition { }
interface map { }`,wo=`/** Navigation API. Note: The code in this file is compatible with API Level 1 and API Level 2 */
declare const g_navigation: g_navigation;
interface g_navigation {
    /** Redirects to another URL. 
url: URL to be loaded. It can be any URL supported by the browser 
target: is the target frame. If left blank, the URL will load in the current frame */
    open(url: string, target: string): void;
    /** Open a popup window with features 
url: The url to open 
name: The name of the new window 
features: is a comma separated list of features. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open 
noStack: True to append sysparm_stack=no to the url. This prevents weirdness when using the form back button 
returns the instance of newly opened Window */
    openPopup(url: string, name: string, features: string, noStack: boolean): any;
    /** Redirects to a record */
    openRecord(table: string, sys_id: string): void;
    /** Reload the current frame */
    reloadWindow(): void;
    /** Refresh the navigator contents */
    refreshNavigator(): void;
}
/** g_form is a global object used in client-side scripts to customize forms */
declare const g_form: g_form;
interface g_form {
    /** Adds an icon on a field’s label. This method is available starting with the Fuji release */
    addDecoration(fieldName: string, icon: string, title: string): void;
    /** Displays an error message at the top of the form */
    addErrorMessage(message: string): void;
    /** Displays an informational message at the top of the form */
    addInfoMessage(message: string): void;
    /** Adds a choice to a choice list field If the index is not specified, the choice is added to the end of the list. Optional: Use the index field to specify a particular place in the list */
    addOption(fieldName: string, choiceValue: string, choiceLabel: string): void;
    /** Removes messages that were previously added with addErrorMessage() and addInfoMessage() */
    clearMessages(): void;
    /** Removes all options from a choice list */
    clearOptions(fieldName: string): void;
    /** Removes any value(s) from the specified field */
    clearValue(fieldName: string): void;
    /** Prevents new file attachments from being added Hides the paperclip icon. See also: enableAttachments() */
    disableAttachments(): void;
    /** Allows new file attachments to be added Shows the paperclip icon. See also: disableAttachments() */
    enableAttachments(): void;
    /** Flashes the specified color the specified number of times in the field. Used to draw attention to a particular field */
    flash(widgetName: string, color: string, count: number): void;
    /** Returns the most recent action name or, for a client script, the sys_id of the UI Action clicked Note: not available to Wizard Client Scripts */
    getActionName(): string;
    /** Returns false if the field's value is false or undefined, otherwise true is returned. Useful with checkbox fields Returns true when the checkbox is checked */
    getBooleanValue(fieldName: string): boolean;
    /** Returns the HTML element for the specified field Compound fields may contain several HTML elements. Generally not necessary as there are built-in methods that use the fields on the form */
    getControl(fieldName: string): HTMLElement;
    /** Returns the decimal value of the specified field */
    getDecimalValue(fieldName: string): string;
    /** Returns the HTML element for the field specified via the ID Compound fields may contain several HTML elements. Generally not necessary as there are built-in methods that use the fields on the form */
    getElement(id: string): HTMLElement;
    /** Returns the HTML element for the form */
    getFormElement(): HTMLElement;
    /** Returns the value of the specified field as an integer An empty value returns 0 */
    getIntValue(fieldName: string): number;
    /** Gets the plain text value of the field label. This method is available starting with the Fuji release */
    getLabelOf(fieldName: string): string;
    /** Returns the <option> element for a select box named fieldName and where choiceValue matches the option value Returns null if the field is not found or the option is not found */
    getOption(fieldName: string, choiceValue: string): HTMLElement;
    /** Returns the GlideRecord for a specified field getReference() accepts a second parameter, a callback function Warning: This requires a call to the server so using this function will require additional time and may introduce latency to your page */
    getReference(fieldName: string, callback: string): string;
    /** Returns all section names, whether visible or not, in an array This method is available starting with the Fuji release */
    getSectionNames(): string;
    /** Returns the elements for the form's sections in an array */
    getSections(): string;
    /** Returns the name of the table this record belongs to */
    getTableName(): string;
    /** Returns the sys_id of the record displayed in the form */
    getUniqueValue(): string;
    /** Returns the value of the specified field */
    getValue(fieldName: string): string;
    /** Hides all field messages. <type> paramter is optional */
    hideAllFieldMsgs(type: string): void;
    /** Hides the error message placed by showErrorBox() */
    hideErrorBox(input: string): void;
    /** Hides the message placed by showFieldMsg() */
    hideFieldMsg(input: string, clearAll: boolean): void;
    /** Hides the specified related list on the form */
    hideRelatedList(listTableName: string): void;
    /** Hides all related lists on the form */
    hideRelatedLists(): void;
    /** Returns true if the field is required Returns false if the field is optional */
    isMandatory(fieldName: string): boolean;
    /** Returns true if the record has never been saved Returns false if the record has been saved */
    isNewRecord(): boolean;
    /** Returns true if the section is visible Returns false if the section is not visible or does not exist. This method is available starting with the Fuji release */
    isSectionVisible(sectionName: string): boolean;
    /** Removes the icon that matches the exact same name and text. This method is available starting with the Fuji release */
    removeDecoration(fieldName: string, icon: string, title: string): void;
    /** Removes a specific option from a choice list */
    removeOption(fieldName: string, choiceValue: string): void;
    /** Saves the record without navigating away from the record (update and stay) */
    save(): void;
    /** Grays out field and makes it unavailable */
    setDisabled(fieldName: string, value: boolean): void;
    /** Displays the field if true. Hides the field if false. This method cannot hide mandatory fields with no value. If the field is hidden, the space is used to display other items */
    setDisplay(fieldName: string, display: boolean): void;
    /** Sets the plain text value of the field label. This method is available starting with the Fuji release */
    setLabelOf(fieldname: string, label: string): void;
    /** Makes the field required if true. Makes the field optional if false. Best Practice: Use UI Policy rather than this method whenever possible  */
    setMandatory(fieldName: string, value: boolean): void;
    /** Makes the field read-only if true Makes the field editable if false. Note: Both setReadOnly and setReadonly are functional.  Best Practice: Use UI Policy rather than this method whenever possible */
    setReadOnly(fieldName: string, value: boolean): void;
    /** Shows or hides a section Works in both tab and flat modes. This method is available starting with the Fuji release */
    setSectionDisplay(sectionName: string, display: boolean): boolean;
    /** Sets the value and the display value of a field Will display value if there is no displayValue */
    setValue(fieldName: string, value: string, displayValue: string): void;
    /** Displays the field if true. Hides the field if false. If the field is hidden, the space is left blank. This method cannot hide mandatory fields with no value */
    setVisible(fieldName: string, display: boolean): void;
    /** Displays an error message under the specified form field (either a control object or the name of the field). If the control or field is currently scrolled off the screen, it will be scrolled to. A global property (glide.ui.scroll_to_message_field) is available that controls automatic message scrolling when the form field is offscreen (scrolls the form to the control or field). The showFieldMsg() method is a similar method that requires a 'type' parameter */
    showErrorBox(input: string, message: string, scrollForm: boolean): void;
    /** Displays either an informational or error message under the specified form field (either a control object or the name of the field). Type may be either 'info' or 'error.' If the control or field is currently scrolled off the screen, it will be scrolled to. A global property (glide.ui.scroll_to_message_field) is available that controls automatic message scrolling when the form field is offscreen (scrolls the form to the control or field) */
    showFieldMsg(input: string, message: string, type: string, scrollForm: boolean): void;
    /** Displays the specified related list on the form */
    showRelatedList(listTableName: string): void;
    /** Displays all related lists on the form */
    showRelatedLists(): void;
    /** Saves the record User will be taken away from the form, returning them to where they were previously */
    submit(): void;
}
interface HTMLElement { }
/** g_list is a global object used in client-side scripts to customize lists */
declare const g_list: g_list;
interface g_list {
    /** Adds a single term to the list query filter */
    addFilter(filter: string): queryCondition;
    /** Returns the GlideList2 object for the list or for the list that contains the specified item. String listID or DOMElement element - specifies the list by list ID or specifies the list by element */
    get(listID: string, element: DOMElement): GlideList2;
    /** Returns a comma-separated list of the sys_ids for the items that are checked in the list */
    getChecked(): string;
    /** Returns the sysparm_fixed query. A fixed query is the part of the query that cannot be removed from the breadcrumb (i.e., it is fixed for the user). It is specified by including a 'sysparm_fixed_query parameter' for the application module */
    getFixedQuery(): string;
    /** Returns the field or comma-separated list of fields that are used to group the list */
    getGroupBy(): string;
    /** Returns the name of the list, which is usually the table name */
    getListName(): string;
    /** Returns the first field that is used to order by or a blank */
    getOrderBy(): string;
    /** Returns the name of the parent table for a related list (the table associated with the form) */
    getParentTable(): string;
    /** Returns the encoded query string for the list */
    getQuery(orderBy: boolean, groupBy: boolean, fixed: boolean, all: boolean): string;
    /** Returns the related list field that associates the related list to the parent form */
    getRelated(): string;
    /** Returns the table name for the list */
    getTableName(): string;
    /** Returns the list title */
    getTitle(): string;
    /** Returns the view used to display the list */
    getView(): string;
    /** Returns true if the list has been personalized by the user by choosing the list mechanic and changing the list layout */
    isUserList(): boolean;
    /** Refreshes the list. The orderBy part of the list filter is ignored so that the list uses its natural ordering when it is refreshed */
    refresh(firstRow: number, additionalParms: string): void;
    /** Refreshes the list. The orderBy part of the list filter is included if it is currently specified for the list */
    refreshWithOrderBy(firstRow: number, additionalParms: string): void;
    /** Sets the encoded query string for the list, ignoring the orderBy and groupBy parts of the query string */
    setFilter(filter: string): void;
    /** Sets the encoded query string for the list, including the orderBy and groupBy if specified, and then refreshes the list using the new filter */
    setFilterAndRefresh(filter: string): void;
    /** Sets the first row that will be displayed in the list when the list is refreshed */
    setFirstRow(rowNum: number): void;
    /** Sets the groupBy criteria for the list, for a single field or multiple fields. For a single field, use field or groupByField. The groupBy prefix is optional. For multiple fields use field1^field2^field3 or groupByField1^groupByField2^groupByField3 */
    setGroupBy(groupBy: string): void;
    /** Sets the orderBy criteria for the list. For a single order by field use orderBy field or orderByDescField. For multiple fields, use orderByField1^orderByField2^orderByField3. orderBy specifies ascending order and orderByDesc specifies descending. These prefix strings are optional. If not specified orderBy is assumed */
    setOrderBy(orderBy: string): void;
    /** Sets the number of rows per page to display */
    setRowsPerPage(rows: number): void;
    /** Displays or hides all of the groups within the list and saves the current collapsed/expanded state of the groups as a user preference */
    showHideGroups(showFlag: boolean): void;
    /** Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference */
    showHideList(showFlag: boolean): void;
    /** Sorts the list in ascending order and saves the choice */
    sort(field: string): void;
    /** Sorts the list in descending order and saves the choice */
    sortDescending(field: string): void;
    /** Toggles the display of the list and saves the current collapsed/expanded state of the list as a user preference */
    toggleList(): void;
    /** Clears the image for an item */
    toggleListNoPref(): void;
}
interface queryCondition { }
interface DOMElement { }
interface GlideList2 { }
/** g_user is a global object used in client-side scripts, to get current user information */
declare const g_user: g_user;
interface g_user {
    firstName: string;
    lastName: string;
    userID: string;
    userName: string;
    /** Gets information for use in client scripts without making an AJAX call to the server. Works with gs.getSession().putClientData(,) */
    getClientData(key: string): string;
    /** Returns the first and last name of the current user */
    getFullName(): string;
    /** Returns true if the current user has the selected role or the admin role */
    hasRole(role: string): boolean;
    /** Returns true only if the current user has this specified role */
    hasRoleExactly(role: string): boolean;
    /** Returns true if the current user has at least one of the specified roles in the comma-separated list or the admin role */
    hasRoleFromList(roles: string): boolean;
    /** Returns true if the current user has any role */
    hasRoles(): boolean;
}
/** The GlideAjax class allows the execution of server-side code from the client. Initialize GlideAjax with the name of the client callable Script Include that extends AbstractAjaxProcessor */
declare const GlideAjax: GlideAjax;
interface GlideAjax {
    new(): GlideAjax_proto;
    readonly prototype: GlideAjax_proto;
}
interface GlideAjax_proto {
    /** Adds parameters to the request, which are read in the Script Include. sysparm_name parameter is used to invoke a function in Script Include */
    addParam(name: string, value: string): void;
    /** Makes an asynchronous call to the server. On completion, invokes callback function with response object as an argument */
    getXML(callBackFunction: string): void;
    /** Makes an asynchronous call to the server. On completion, invokes callback function with 'answer' value extracted from response object as an argument */
    getXMLAnswer(callbackFunction: string, additionalParams: Object, responseParams: Object): void;
}
/** Constructor to create a new dialog window object in the current window and frame. id is the name of the UI page to load into the dialog window */
declare const GlideDialogWindow: GlideDialogWindow;
interface GlideDialogWindow {
    new(): GlideDialogWindow_proto;
    readonly prototype: GlideDialogWindow_proto;
}
interface GlideDialogWindow_proto {
    /** Closes the dialog window */
    destroy(): void;
    /** Renders the dialog window */
    render(): void;
    /** Sets a given window property to a specified value. Any window property can be set using this method */
    setPreference(name: string, value: string): void;
    /** Sets the size of the dialog window. If you do not pass width and height parameters, a default size is used */
    setSize(width: number, height: number): void;
    /** Sets the title of the dialog window */
    setTitle(title: string): void;
}
/** Client-side GlideRecord enables the use of some GlideRecord functionality inside client-side scripts, such as client scripts and UI policy scripts. Note: Precautions should be made to ensure that queries are optimized and that they do not run synchronously */
declare var GlideRecord: GlideRecord;
interface GlideRecord {
    new(): GlideRecord_proto;
    readonly prototype: GlideRecord_proto;
}
interface GlideRecord_proto {
    /** Adds a column to order by in the query */
    addOrderBy(column: string): void;
    /** Adds a filter to return records based on 1,2 or 3 arguments */
    addQuery(fieldName: string, operator: string, value: string): void;
    /** Deletes a single record */
    deleteRecord(responseFunction: string): boolean;
    /** Executes a GlideRecord query for a record with the specified sys_id */
    get(sys_id: string): boolean;
    /** Gets the encoded query as a string */
    getEncodedQuery(): string;
    /** Gets the limit of records to be returned by the GlideRecord query */
    getLimit(): number;
    /** Retrieves the table name associated with this GlideRecord */
    getTableName(): string;
    /** Determines if there are any more records in the GlideRecord */
    hasNext(): boolean;
    /** Inserts a new record using the field values that have been set for the current record */
    insert(responseFunction): string;
    /** Moves to the next record in the GlideRecord */
    next(): boolean;
    /** Specifies and orderBy column (this may be called more than once to order by multiple columns) */
    orderBy(column: string): void;
    /** Runs the query against the table based on the addQuery() filter */
    query(responseFunction: Function): void;
    /** Sets the limit for how many records will be returned by the GlideRecord query */
    setLimit(maxQuery: number): void;
    /** Update the record with an optional responseFunction handler */
    update(responseFunction: string): void;
}
declare const getMessage: getMessage;
interface getMessage {
}
/** Interact with Service Portal utility functions. */
declare const spUtil: spUtil;
interface spUtil {
    /** Update data in the scope by getting it from the server. */
    update(scope: any): void;
    /** Call widget on server with data. */
    get(scope: any, data: any): void;
    /** Add an info message. */
    addInfoMessage(message: string): void;
}`,it=Fe("@servicenow/aiux-components-code-editor/autocomplete");class yo{constructor(e,t){this._monaco=null,this._editor=null,this._disposables=[],this._isInitialized=!1,this._completionsFetched=!1,this._monaco=e,this._editor=t}init(e,t,o,r){return e!==q.JAVASCRIPT||r?.disabled?!1:(this._addBaseCompletions(t),r?.lazyLoad||this._fetchScopeCompletions(o),r?.customCompletions&&this._addCustomCompletions(r.customCompletions),this._isInitialized=!0,!0)}_addBaseCompletions(e){if(!this._monaco)return;const t=e?wo:vo,o=this._monaco.languages.typescript.javascriptDefaults.addExtraLib(t);this._disposables.push(o)}async _fetchScopeCompletions(e){if(!(this._completionsFetched||!this._monaco))try{const t=`${po.COMPLETIONS}?scope=${encodeURIComponent(e)}`,o=await fetch(t);if(!o.ok){it.warn({status:o.statusText},"Failed to fetch completions");return}const n=(await o.json())?.result?.result;if(n){const s=this._monaco.languages.typescript.javascriptDefaults.addExtraLib(n);this._disposables.push(s),this._completionsFetched=!0}}catch(t){it.error({error:t.message},"Error fetching completions")}}_addCustomCompletions(e){if(!this._monaco)return;const t=this._monaco.languages.typescript.javascriptDefaults.addExtraLib(e);this._disposables.push(t)}fetchCompletions(e){return this._fetchScopeCompletions(e)}get isInitialized(){return this._isInitialized}dispose(){this._disposables.forEach(e=>e.dispose()),this._disposables=[],this._monaco=null,this._editor=null,this._isInitialized=!1,this._completionsFetched=!1}}function N(i,e,t,o){var r=arguments.length,n=r<3?e:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}const xo=Fe("@servicenow/aiux-components-code-editor"),Ke=class Ke extends Tt{async connectedCallback(){if(super.connectedCallback(),await this.updateComplete,!this.isConnected)return;const e=this.shadowRoot?.querySelector(".editor-container");if(e)try{fo();const t=await mo();if(!this.isConnected||!t)return;this._monaco=t,this._editor=t.editor.create(e,this._getMonacoOptions()),this._registerContentChangedListener(),this._registerFocusChangedListener(),this._registerEscapeHandler(),this._initLint(),this._initAutocomplete()}catch(t){xo.error({error:t.message},"Failed to initialize Monaco editor")}}_calculateMaxHeight(){return!this.autoresizeLineLimit||this.autoresizeLineLimit<=0?this.height:this.autoresizeLineLimit*Ae.LINE_HEIGHT+Ae.TOOLBAR_HEIGHT+Ae.EDITOR_CONTENT_MARGIN_TOP+"px"}_registerContentChangedListener(){!this._editor||this.readOnly||(this._contentChangedDisposable?.dispose(),this._contentChangedDisposable=this._editor.onDidChangeModelContent(()=>{this._isInternalUpdate||(this.value=this._editor.getValue(),this._onContentChanged())}))}_registerFocusChangedListener(){this._editor&&(this._editor.onDidFocusEditorText(()=>{this.dispatchEvent(new CustomEvent(fe.TEXT_EDITOR_FOCUS_CHANGED,{detail:{hasFocus:!0},bubbles:!0,composed:!0}))}),this._editor.onDidBlurEditorText(()=>{this.dispatchEvent(new CustomEvent(fe.TEXT_EDITOR_FOCUS_CHANGED,{detail:{hasFocus:!1},bubbles:!0,composed:!0}))}))}_getMonacoOptions(){return{value:this.value,language:this.language,readOnly:this.readOnly,scrollBeyondLastLine:this.scrollBeyondLastLine,automaticLayout:!0}}updated(e){if(e.has("_isFullScreen")&&this.toggleAttribute("fullscreen",this._isFullScreen),!(!this._editor||so)){if(e.has("language")&&this._monaco){const t=this._editor.getModel();t&&this._monaco.editor.setModelLanguage(t,this.language)}e.has("value")&&this._editor.getValue()!==this.value&&(this._isInternalUpdate=!0,this._editor.setValue(this.value),this._isInternalUpdate=!1),e.has("readOnly")&&(this._editor.updateOptions({readOnly:this.readOnly}),this.readOnly||this._registerContentChangedListener()),e.has("scrollBeyondLastLine")&&this._editor.updateOptions({scrollBeyondLastLine:this.scrollBeyondLastLine})}}disconnectedCallback(){super.disconnectedCallback(),this._removeEscapeHandler(),this._contentChangedDisposable?.dispose(),this._contentChangedDisposable=null,this._lintingManager?.dispose(),this._lintingManager=null,this._autocompleteManager?.dispose(),this._autocompleteManager=null,this._editor?.dispose(),this._editor=null}_registerEscapeHandler(){this._boundEscHandler=e=>{e.key==="Escape"&&this._isFullScreen&&(e.preventDefault(),this._toggleFullscreen())},this.addEventListener("keydown",this._boundEscHandler)}_removeEscapeHandler(){this._boundEscHandler&&(this.removeEventListener("keydown",this._boundEscHandler),this._boundEscHandler=null)}_toggleFullscreen(){this._isFullScreen=!this._isFullScreen,setTimeout(()=>{this._editor?.layout()},Et.LAYOUT_ADJUSTMENT_DELAY_MS),this.dispatchEvent(new CustomEvent(fe.FULLSCREEN_TOGGLED,{detail:{isFullScreen:this._isFullScreen},bubbles:!0,composed:!0}))}_handleToolbarAction(e){const{itemId:t}=e.detail;switch(t){case"search":this._triggerSearch();break;case"comment":this._triggerComment();break;case"format":this._formatCode();break}}_handleToolbarItemToggle(e){const{itemId:t}=e.detail;switch(t){case"fullscreen":this._toggleFullscreen();break;case"syntax-check":this._toggleSyntaxCheck();break}}_triggerSearch(){this._editor?.trigger("keyboard","actions.find",null)}_triggerComment(){this._editor?.trigger("keyboard","editor.action.commentLine",null)}_formatCode(){this._editor?.trigger("keyboard","editor.action.formatDocument",null)}async _initLint(){!this._monaco||!this._editor||(this._lintingManager=new bo(this._monaco,this._editor,()=>{this._dispatchContentChanged()}),await this._lintingManager.init(this.language,this.linting),this.requestUpdate())}_initAutocomplete(){!this._monaco||!this._editor||(this._autocompleteManager=new yo(this._monaco,this._editor),this._autocompleteManager.init(this.language,this.isClientScript,this.scope,this.autocomplete))}_toggleSyntaxCheck(){this._lintingManager&&(this._lintingManager.toggleSyntaxCheck(),this.requestUpdate())}_dispatchContentChanged(){if(!this._editor)return;const e=this._editor.getModel();if(!e)return;const t=this._lintingManager?.getCurrentErrors()||[];this.dispatchEvent(new CustomEvent(fe.CONTENT_CHANGED,{detail:{text:e.getValue(),errors:t,lintingEnabled:this._lintingManager?.isEnabled||!1},bubbles:!0,composed:!0}))}_onContentChanged(){if(!(!this._editor||!this._editor.getModel())){if(!this._lintingManager?.isEnabled||!this._lintingManager?.isInitialized){this._dispatchContentChanged();return}this._lintingManager.onContentChanged()}}_renderToolbar(){if(this.hideToolbar)return j;const e=[{id:"editing",items:[{id:"search",icon:"magnifying-glass",tooltip:"Find",type:"action"},{id:"comment",icon:"chat-outline",tooltip:"Toggle comment",type:"action",disabled:this.readOnly},{id:"format",icon:"align-left",tooltip:"Format code",type:"action",disabled:this.readOnly},{id:"syntax-check",icon:"circle-check",tooltip:"Toggle syntax check",type:"toggle",active:this._lintingManager?.isEnabled||!1,disabled:this.language!==q.JAVASCRIPT||this.readOnly}]},{id:"view",items:[{id:"fullscreen",icon:this._isFullScreen?"collapse-outline":"expand-outline",tooltip:this._isFullScreen?"Exit fullscreen":"Fullscreen",type:"toggle"}]}];return A`
      <aiux-toolbar
        .groups=${e}
        size="sm"
        aria-label="Code editor toolbar"
        @aiux-toolbar:item-clicked=${this._handleToolbarAction}
        @aiux-toolbar:item-toggled=${this._handleToolbarItemToggle}
      ></aiux-toolbar>
    `}render(){const e=this._calculateMaxHeight(),t=this._isFullScreen?"100%":this.height,o=this._isFullScreen?"100%":e;return A`
      <div
        class=${W({"code-editor-wrapper":!0,fullscreen:this._isFullScreen})}
      >
        ${this._renderToolbar()}
        <div
          class="editor-container"
          style="width:${this.width}; height:${t}; max-height:${o}"
        ></div>
      </div>
    `}constructor(...e){super(...e),this.value="",this.language=ee.LANGUAGE,this.height=ee.HEIGHT,this.width=ee.WIDTH,this.readOnly=!1,this.scrollBeyondLastLine=ee.SCROLL_BEYOND_LAST_LINE,this.autoresizeLineLimit=ee.AUTORESIZE_LINE_LIMIT,this.scriptField="",this.sysId="",this.recordType="",this.isClientScript=!1,this.scope=ee.SCOPE,this.hideToolbar=!1,this.linting={disabled:!1},this.autocomplete={disabled:!1,lazyLoad:!1},this._editor=null,this._monaco=null,this._isInternalUpdate=!1,this._isFullScreen=!1,this._lintingManager=null,this._autocompleteManager=null,this._contentChangedDisposable=null,this._boundEscHandler=null}};Ke.styles=[no(ho),uo];let S=Ke;N([w({type:String})],S.prototype,"value",void 0);N([w({type:String})],S.prototype,"language",void 0);N([w({type:String})],S.prototype,"height",void 0);N([w({type:String})],S.prototype,"width",void 0);N([w({type:Boolean})],S.prototype,"readOnly",void 0);N([w({type:Boolean})],S.prototype,"scrollBeyondLastLine",void 0);N([w({type:Number})],S.prototype,"autoresizeLineLimit",void 0);N([w({type:String})],S.prototype,"scriptField",void 0);N([w({type:String})],S.prototype,"sysId",void 0);N([w({type:String})],S.prototype,"recordType",void 0);N([w({type:Boolean})],S.prototype,"isClientScript",void 0);N([w({type:String})],S.prototype,"scope",void 0);N([w({type:Boolean,reflect:!0,attribute:"hide-toolbar"})],S.prototype,"hideToolbar",void 0);N([w({type:Object})],S.prototype,"linting",void 0);N([w({type:Object})],S.prototype,"autocomplete",void 0);N([pe()],S.prototype,"_isFullScreen",void 0);S=N([qe("aiux-code-editor")],S);const Ce={VALUE_CHANGED:"AIUX_CONTROL_CODE_EDITOR#VALUE_CHANGED",STAGED_VALUE_CHANGED:"AIUX_CONTROL_CODE_EDITOR#STAGED_VALUE_CHANGED"};class _o extends Error{constructor(e,t,o,r){super(e),this.name=this.constructor.name,this.code=t,this.line=o,this.col=r,Error.captureStackTrace?.(this,this.constructor)}}function To(i,e){const t=[];let o=e.exec(i);for(;o;){const r=[];r.startIndex=e.lastIndex-o[0].length;const n=o.length;for(let s=0;s<n;s++)r.push(o[s]);t.push(r),o=e.exec(i)}return t}function rt(i){return i===" "||i==="	"||i===`
`||i==="\r"}function kt(i){return i<=8||i===11||i===12||i>=14&&i<=31}function x(i,e){const t=i.substring(0,e).split(/\r?\n/);return{line:t.length,col:t[t.length-1].length+1}}function Eo(i){return i.startIndex+i[1].length}const St=":A-Za-z_À-ÖØ-öø-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",ko=St+"\\-\\.\\d·̀-ͯ‿-⁀",At=":A-Za-z_À-˿Ͱ-ͽͿ-҆҈-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�𐀀-󯿿",So=At+"\\-\\.\\d·̀-ͯ҇‿-⁀",Ve=(i,e,t="")=>{const o=i.replace(":",""),r=e.replace(":",""),n=`[${o}][${r}]*`;return{name:new RegExp(`^[${i}][${e}]*$`,t),ncName:new RegExp(`^${n}$`,t),qName:new RegExp(`^${n}(?::${n})?$`,t),nmToken:new RegExp(`^[${e}]+$`,t),nmTokens:new RegExp(`^[${e}]+(?:\\s+[${e}]+)*$`,t)}},Ao=Ve(St,ko),Io=Ve(At,So,"u"),It=":A-Za-z_",Co=It+"\\-\\.\\d",No=Ve(It,Co),Ct=(i="1.0",e=!1)=>e?No:i==="1.1"?Io:Ao,Nt=(i,{xmlVersion:e="1.0",asciiOnly:t=!1}={})=>Ct(e,t).name.test(i),nt=["name","ncName","qName","nmToken","nmTokens"],De=(i,{xmlVersion:e="1.0",asciiOnly:t=!1,maxCacheSize:o=2048}={})=>{if(!nt.includes(i))throw new TypeError(`Unknown production "${i}". Must be one of: ${nt.join(", ")}`);const r=Ct(e,t)[i];let n=new Map;const s=a=>{const d=n.get(a);if(d!==void 0)return d;const c=r.test(a);return n.size<o&&n.set(a,c),c};return s.reset=()=>{n=new Map},s};class Ro{constructor(e="1.0"){this.xmlVersion=e,this.qName=De("qName",{xmlVersion:e}),this.name=De("name",{xmlVersion:e})}isValidQName(e){return this.qName(e)}isValidName(e){return this.name(e)}}class Do{constructor(e={},t){this.optional=e.optional!==void 0?e.optional:!0,this.argPosition=e.argPosition!==void 0?e.argPosition:e.argPostion!==void 0?e.argPostion:!0,this._throwError=t}validate(e){if(!e.startsWith("<?xml"))return this.optional||this._throwError("InvalidXml","XML declaration is required but missing.",{line:1,col:1}),{version:"1.0",end:0};const o=e.indexOf("?>");o===-1&&this._throwError("InvalidXml",'XML declaration is not closed with "?>".',{line:1,col:1});const r=e.substring(5,o),n=o+2,s=["version","encoding","standalone"],a=/\s+([\w]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;let d="1.0",c=-1,u;for(;(u=a.exec(r))!==null;){const m=u[1],b=u[2]!==void 0?u[2]:u[3],f=u.index,y=s.indexOf(m);y===-1&&this._throwError("InvalidXml",'XML declaration contains unknown attribute "'+m+'". Allowed: version, encoding, standalone.',{line:1,col:6+f}),this.argPosition&&y<=c&&this._throwError("InvalidXml",'XML declaration attribute "'+m+'" is out of order. Required order: version, encoding, standalone.',{line:1,col:6+f}),c=y,m==="version"?(b!=="1.0"&&b!=="1.1"&&this._throwError("InvalidXml",'XML declaration version "'+b+'" is not supported. Must be "1.0" or "1.1".',{line:1,col:6+f}),d=b):m==="standalone"&&b!=="yes"&&b!=="no"&&this._throwError("InvalidXml",'XML declaration standalone "'+b+'" is invalid. Must be "yes" or "no".',{line:1,col:6+f})}const g=r.replace(/\s+[\w]+\s*=\s*(?:"[^"]*"|'[^']*')/g,"").trim();return g.length>0&&this._throwError("InvalidXml",'XML declaration contains invalid content: "'+g+'".',{line:1,col:1}),{version:d,end:n}}}class Q{static findIllegalIndex(e){const t=e.length;for(let o=0;o<t;o++)if(kt(e.charCodeAt(o)))return o;return-1}static hasIllegalChar(e){return this.findIllegalIndex(e)!==-1}static describe(e){return`0x${e.toString(16).padStart(2,"0")}`}}const Lo=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");class Mo{constructor(e,t,o){this.options=e,this.nameValidator=t,this.xmlVersion=o}validate(e){const t=To(e,Lo),o={},r=this.options.invalidCharSequence?.attrLt===!0;for(let n=0;n<t.length;n++){const s=t[n];if(s[1].length===0)return this._err("InvalidAttr","Attribute '"+s[2]+"' has no space in starting.",s);const a=s[3]!==void 0,d=s[4]!==void 0;if(a&&!d)return this._err("UnquotedAttributeValue","Attribute '"+s[2]+"' is without value.",s);if(!a&&!this.options.allowBooleanAttributes)return this._err("InvalidAttr","boolean attribute '"+s[2]+"' is not allowed.",s);const c=s[2];if(!this.nameValidator.isValidQName(c))return this._err("InvalidAttr","Attribute '"+c+"' is an invalid name.",s);const u=s[6]||"";if(d){const g=Q.findIllegalIndex(u);if(g!==-1){const m=u.charCodeAt(g);return this._err("IllegalCharacter",`Illegal control character ${Q.describe(m)} in attribute '${c}' value.`,s)}if(r&&u.indexOf("<")!==-1)return this._err("InvalidAttr",`Attribute '${c}' value must not contain '<'.`,s)}if(c.startsWith("xmlns:")&&s[6]===""&&this.xmlVersion==="1.0")return this._err("InvalidAttr",`Undeclaring the prefixed namespace ${c}="" is only permitted in XML 1.1 documents.`,s);if(!Object.prototype.hasOwnProperty.call(o,c))o[c]=1;else return this._err("InvalidAttr","Attribute '"+c+"' is repeated.",s)}return!0}_err(e,t,o){return{err:{code:e,msg:t,line:Eo(o)}}}}class Oo{constructor(e={}){this.checkCommentDashes=e.invalidCharSequence?.comment===!0}read(e,t,o){if(e.length>t+2&&e[t+1]==="-"&&e[t+2]==="-")return this._readComment(e,t);if(e.length>t+7&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E")return o.validateDocType(e,t-1);if(e.length>t+8&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="[")return this._readCdata(e,t);throw new Error("Invalid construct starting with '<!'.")}_readComment(e,t){const o=t+3;for(t=o;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}if(e[t]!==">")throw new Error('Comment is not closed with "-->".');const r=e.substring(o,t-2),n=Q.findIllegalIndex(r);if(n!==-1){const s=r.charCodeAt(n);throw new Error(`Illegal control character ${Q.describe(s)} in comment.`)}if(this.checkCommentDashes&&r.indexOf("--")!==-1)throw new Error("Comment must not contain '--'.");return t}_readCdata(e,t){const o=t+8;for(t=o;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}if(e[t]!==">")throw new Error('CDATA section is not closed with "]]>".');const r=e.substring(o,t-2),n=Q.findIllegalIndex(r);if(n!==-1){const s=r.charCodeAt(n);throw new Error(`Illegal control character ${Q.describe(s)} in CDATA section.`)}return t}}class Z{constructor(e,t={},o){this.pattern=e,this.separator=t.separator||".",this.segments=this._parse(e),this.data=o,this._hasDeepWildcard=this.segments.some(r=>r.type==="deep-wildcard"),this._hasAttributeCondition=this.segments.some(r=>r.attrName!==void 0),this._hasPositionSelector=this.segments.some(r=>r.position!==void 0)}_parse(e){const t=[];let o=0,r="";for(;o<e.length;)e[o]===this.separator?o+1<e.length&&e[o+1]===this.separator?(r.trim()&&(t.push(this._parseSegment(r.trim())),r=""),t.push({type:"deep-wildcard"}),o+=2):(r.trim()&&t.push(this._parseSegment(r.trim())),r="",o++):(r+=e[o],o++);return r.trim()&&t.push(this._parseSegment(r.trim())),t}_parseSegment(e){const t={type:"tag"};let o=null,r=e;const n=e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);if(n&&(r=n[1]+n[3],n[2])){const u=n[2].slice(1,-1);u&&(o=u)}let s,a=r;if(r.includes("::")){const u=r.indexOf("::");if(s=r.substring(0,u).trim(),a=r.substring(u+2).trim(),!s)throw new Error(`Invalid namespace in pattern: ${e}`)}let d,c=null;if(a.includes(":")){const u=a.lastIndexOf(":"),g=a.substring(0,u).trim(),m=a.substring(u+1).trim();["first","last","odd","even"].includes(m)||/^nth\(\d+\)$/.test(m)?(d=g,c=m):d=a}else d=a;if(!d)throw new Error(`Invalid segment pattern: ${e}`);if(t.tag=d,s&&(t.namespace=s),o)if(o.includes("=")){const u=o.indexOf("=");t.attrName=o.substring(0,u).trim(),t.attrValue=o.substring(u+1).trim()}else t.attrName=o.trim();if(c){const u=c.match(/^nth\((\d+)\)$/);u?(t.position="nth",t.positionValue=parseInt(u[1],10)):t.position=c}return t}get length(){return this.segments.length}hasDeepWildcard(){return this._hasDeepWildcard}hasAttributeCondition(){return this._hasAttributeCondition}hasPositionSelector(){return this._hasPositionSelector}toString(){return this.pattern}}class ie{constructor(){this._byDepthAndTag=new Map,this._wildcardByDepth=new Map,this._deepWildcards=[],this._deepByTerminalTag=new Map,this._patterns=new Set,this._sealed=!1}add(e){if(this._sealed)throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");if(this._patterns.has(e.pattern))return this;if(this._patterns.add(e.pattern),e.hasDeepWildcard()){const n=e.segments[e.segments.length-1];if(n&&n.type!=="deep-wildcard"&&n.tag!=="*"){const s=n.tag;this._deepByTerminalTag.has(s)||this._deepByTerminalTag.set(s,[]),this._deepByTerminalTag.get(s).push(e)}else this._deepWildcards.push(e);return this}const t=e.length,r=e.segments[e.segments.length-1]?.tag;if(!r||r==="*")this._wildcardByDepth.has(t)||this._wildcardByDepth.set(t,[]),this._wildcardByDepth.get(t).push(e);else{const n=`${t}:${r}`;this._byDepthAndTag.has(n)||this._byDepthAndTag.set(n,[]),this._byDepthAndTag.get(n).push(e)}return this}addAll(e){for(const t of e)this.add(t);return this}has(e){return this._patterns.has(e.pattern)}get size(){return this._patterns.size}seal(){return this._sealed=!0,this}get isSealed(){return this._sealed}matchesAny(e){return this.findMatch(e)!==null}findMatch(e){const t=e.getDepth(),o=e.getCurrentTag(),r=`${t}:${o}`,n=this._byDepthAndTag.get(r);if(n){for(let d=0;d<n.length;d++)if(e.matches(n[d]))return n[d]}const s=this._wildcardByDepth.get(t);if(s){for(let d=0;d<s.length;d++)if(e.matches(s[d]))return s[d]}const a=this._deepByTerminalTag.get(o);if(a){for(let d=0;d<a.length;d++)if(e.matches(a[d]))return a[d]}for(let d=0;d<this._deepWildcards.length;d++)if(e.matches(this._deepWildcards[d]))return this._deepWildcards[d];return null}}class Go{constructor(e){this._matcher=e}get separator(){return this._matcher.separator}getCurrentTag(){const e=this._matcher.path;return e.length>0?e[e.length-1].tag:void 0}getCurrentNamespace(){const e=this._matcher.path;return e.length>0?e[e.length-1].namespace:void 0}getAttrValue(e){const t=this._matcher.path;if(t.length!==0)return t[t.length-1].values?.[e]}hasAttr(e){const t=this._matcher.path;if(t.length===0)return!1;const o=t[t.length-1];return o.values!==void 0&&e in o.values}getAnyParentAttr(e){return this._matcher.getAnyParentAttr(e)}hasAnyParentAttr(e){return this._matcher.hasAnyParentAttr(e)}getPosition(){const e=this._matcher.path;return e.length===0?-1:e[e.length-1].position??0}getCounter(){const e=this._matcher.path;return e.length===0?-1:e[e.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this._matcher.path.length}toString(e,t=!0){return this._matcher.toString(e,t)}toArray(){return this._matcher.path.map(e=>e.tag)}matches(e){return this._matcher.matches(e)}matchesAny(e){return e.matchesAny(this._matcher)}}class Le{constructor(e={}){this.separator=e.separator||".",this.path=[],this.siblingStacks=[],this._pathStringCache=null,this._view=new Go(this),this._keptAttrs=[]}push(e,t=null,o=null,r=null){this._pathStringCache=null,this.path.length>0&&(this.path[this.path.length-1].values=void 0);const n=this.path.length;let s=this.siblingStacks[n];s||(s={counts:new Map,total:0},this.siblingStacks[n]=s);const a=o?`${o}:${e}`:e,d=s.counts.get(a)||0,c=s.total;s.counts.set(a,d+1),s.total++;const u={tag:e,position:c,counter:d};o!=null&&(u.namespace=o),t!=null&&(u.values=t),this.path.push(u);const g=this.path.length,m=r!==null?r.keep:null;if(m!=null&&m.length>0&&t)for(let b=0;b<m.length;b++){const f=m[b];t[f]!==void 0&&this._keptAttrs.push({depth:g,name:f,value:t[f]})}}pop(){if(this.path.length===0)return;this._pathStringCache=null;const e=this.path.pop();this.siblingStacks.length>this.path.length+1&&(this.siblingStacks.length=this.path.length+1);const t=this.path.length+1;for(;this._keptAttrs.length>0&&this._keptAttrs[this._keptAttrs.length-1].depth>=t;)this._keptAttrs.pop();return e}updateCurrent(e){if(this.path.length>0){const t=this.path[this.path.length-1];e!=null&&(t.values=e)}}getCurrentTag(){return this.path.length>0?this.path[this.path.length-1].tag:void 0}getCurrentNamespace(){return this.path.length>0?this.path[this.path.length-1].namespace:void 0}getAttrValue(e){if(this.path.length!==0)return this.path[this.path.length-1].values?.[e]}hasAttr(e){if(this.path.length===0)return!1;const t=this.path[this.path.length-1];return t.values!==void 0&&e in t.values}getAnyParentAttr(e){const t=this._keptAttrs;for(let o=t.length-1;o>=0;o--)if(t[o].name===e)return t[o].value}hasAnyParentAttr(e){const t=this._keptAttrs;for(let o=t.length-1;o>=0;o--)if(t[o].name===e)return!0;return!1}getPosition(){return this.path.length===0?-1:this.path[this.path.length-1].position??0}getCounter(){return this.path.length===0?-1:this.path[this.path.length-1].counter??0}getIndex(){return this.getPosition()}getDepth(){return this.path.length}toString(e,t=!0){const o=e||this.separator;if(o===this.separator&&t===!0){if(this._pathStringCache!==null)return this._pathStringCache;const n=this.path.map(s=>s.namespace?`${s.namespace}:${s.tag}`:s.tag).join(o);return this._pathStringCache=n,n}return this.path.map(n=>t&&n.namespace?`${n.namespace}:${n.tag}`:n.tag).join(o)}toArray(){return this.path.map(e=>e.tag)}reset(){this._pathStringCache=null,this.path=[],this.siblingStacks=[],this._keptAttrs=[]}matches(e){const t=e.segments;return t.length===0?!1:e.hasDeepWildcard()?this._matchWithDeepWildcard(t):this._matchSimple(t)}_matchSimple(e){if(this.path.length!==e.length)return!1;for(let t=0;t<e.length;t++)if(!this._matchSegment(e[t],this.path[t],t===this.path.length-1))return!1;return!0}_matchWithDeepWildcard(e){let t=this.path.length-1,o=e.length-1;for(;o>=0&&t>=0;){const r=e[o];if(r.type==="deep-wildcard"){if(o--,o<0)return!0;const n=e[o];let s=!1;for(let a=t;a>=0;a--)if(this._matchSegment(n,this.path[a],a===this.path.length-1)){t=a-1,o--,s=!0;break}if(!s)return!1}else{if(!this._matchSegment(r,this.path[t],t===this.path.length-1))return!1;t--,o--}}return o<0}_matchSegment(e,t,o){if(e.tag!=="*"&&e.tag!==t.tag||e.namespace!==void 0&&e.namespace!=="*"&&e.namespace!==t.namespace||e.attrName!==void 0&&(!o||!t.values||!(e.attrName in t.values)||e.attrValue!==void 0&&String(t.values[e.attrName])!==String(e.attrValue)))return!1;if(e.position!==void 0){if(!o)return!1;const r=t.counter??0;if(e.position==="first"&&r!==0)return!1;if(e.position==="odd"&&r%2!==1)return!1;if(e.position==="even"&&r%2!==0)return!1;if(e.position==="nth"&&r!==e.positionValue)return!1}return!0}matchesAny(e){return e.matchesAny(this)}snapshot(){return{path:this.path.map(e=>({...e})),siblingStacks:this.siblingStacks.map(e=>e&&{counts:new Map(e.counts),total:e.total}),keptAttrs:this._keptAttrs.map(e=>({...e}))}}restore(e){this._pathStringCache=null,this.path=e.path.map(t=>({...t})),this.siblingStacks=e.siblingStacks.map(t=>t&&{counts:new Map(t.counts),total:t.total}),this._keptAttrs=(e.keptAttrs||[]).map(t=>({...t}))}readOnly(){return this._view}}class Po{constructor(e=[]){this._expressions=e.map(t=>new Z(t)),this._matcher=new Le,this._enabled=this._expressions.length>0}get enabled(){return this._enabled}push(e,t){if(!this._enabled)return!1;this._matcher.push(e,t||null);for(let o=0;o<this._expressions.length;o++)if(this._matcher.matches(this._expressions[o]))return!0;return!1}pop(){this._enabled&&this._matcher.pop()}}class Bo{static consume(e,t,o){const r="</"+t;let n=o;for(;;){const s=e.indexOf(r,n);if(s===-1)throw new Error(`Unclosed skipped tag '${t}'.`);let a=s+r.length;for(;a<e.length&&/\s/.test(e[a]);)a++;if(e[a]===">")return a;n=s+r.length}}}const Uo={maxEntityCount:1/0,maxEntitySize:1/0};class zo{constructor(e,t="1.0"){this.options=Object.assign({},Uo,e),this.suppressValidationErr=!e,this.xmlVersion=t}validateDocType(e,t){if(e[t+3]!=="O"||e[t+4]!=="C"||e[t+5]!=="T"||e[t+6]!=="Y"||e[t+7]!=="P"||e[t+8]!=="E")throw new Error("Invalid Tag instead of DOCTYPE");t+=9;let o=1,r=!1,n=!1,s=0;for(;t<e.length;t++)if(e[t]==="<"&&!n){if(r&&Y(e,"!ENTITY",t))t+=7,[s,t]=this._validateEntityExp(e,t+1,s);else if(r&&Y(e,"!ELEMENT",t))t+=8,t=this._validateElementExp(e,t+1);else if(r&&Y(e,"!ATTLIST",t)){t+=8,t=this._validateAttlistExp(e,t+1);continue}else if(r&&Y(e,"!NOTATION",t))t+=9,t=this._validateNotationExp(e,t+1);else if(Y(e,"!--",t))n=!0;else throw new Error("Invalid DOCTYPE");o++}else if(e[t]===">"){if(n?e[t-1]==="-"&&e[t-2]==="-"&&(n=!1,o--):o--,o===0)break}else e[t]==="["&&(r=!0);if(o!==0)throw new Error("Unclosed DOCTYPE");return t}_validateEntityExp(e,t,o){t=R(e,t);const r=t;for(;t<e.length&&!/\s/.test(e[t])&&e[t]!=='"'&&e[t]!=="'";)t++;const n=e.substring(r,t);if(ne(n,this.xmlVersion),t=R(e,t),!this.suppressValidationErr){if(e.substring(t,t+6).toUpperCase()==="SYSTEM")throw new Error("External entities are not supported");if(e[t]==="%")throw new Error("Parameter entities are not supported")}let s;[t,s]=se(e,t,"entity");const{maxEntitySize:a,maxEntityCount:d}=this.options;if(s.length>a)throw new Error(`Entity "${n}" size (${s.length}) exceeds maximum allowed size (${a})`);if(s.indexOf("&")===-1&&(o++,o>d))throw new Error(`Entity count (${o}) exceeds maximum allowed (${d})`);return[o,t-1]}_validateNotationExp(e,t){t=R(e,t);const o=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;const r=e.substring(o,t);!this.suppressValidationErr&&ne(r,this.xmlVersion),t=R(e,t);const n=e.substring(t,t+6).toUpperCase();if(!this.suppressValidationErr&&n!=="SYSTEM"&&n!=="PUBLIC")throw new Error(`Expected SYSTEM or PUBLIC, found "${n}"`);return t+=n.length,t=R(e,t),n==="PUBLIC"?([t]=se(e,t,"publicIdentifier"),t=R(e,t),(e[t]==='"'||e[t]==="'")&&([t]=se(e,t,"systemIdentifier"))):n==="SYSTEM"&&([t]=se(e,t,"systemIdentifier")),--t}_validateElementExp(e,t){t=R(e,t);const o=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;const r=e.substring(o,t);if(!this.suppressValidationErr&&!Nt(r,{xmlVersion:this.xmlVersion}))throw new Error(`Invalid element name: "${r}"`);if(t=R(e,t),e[t]==="E"&&Y(e,"MPTY",t))t+=4;else if(e[t]==="A"&&Y(e,"NY",t))t+=2;else if(e[t]==="("){for(t++;t<e.length&&e[t]!==")";)t++;if(e[t]!==")")throw new Error("Unterminated content model")}else if(!this.suppressValidationErr)throw new Error(`Invalid Element Expression, found "${e[t]}"`);return t}_validateAttlistExp(e,t){t=R(e,t);const o=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;const r=e.substring(o,t);ne(r,this.xmlVersion),t=R(e,t);const n=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;const s=e.substring(n,t);if(ne(s,this.xmlVersion),t=R(e,t),e.substring(t,t+8).toUpperCase()==="NOTATION"){if(t+=8,t=R(e,t),e[t]!=="(")throw new Error(`Expected '(', found "${e[t]}"`);for(t++;t<e.length&&e[t]!==")";){const a=t;for(;t<e.length&&e[t]!=="|"&&e[t]!==")";)t++;const d=e.substring(a,t).trim();ne(d,this.xmlVersion),e[t]==="|"&&(t++,t=R(e,t))}if(e[t]!==")")throw new Error("Unterminated list of notations");t++}else{const a=t;for(;t<e.length&&!/\s/.test(e[t]);)t++;const d=e.substring(a,t),c=["CDATA","ID","IDREF","IDREFS","ENTITY","ENTITIES","NMTOKEN","NMTOKENS"];if(!this.suppressValidationErr&&!c.includes(d.toUpperCase()))throw new Error(`Invalid attribute type: "${d}"`)}return t=R(e,t),e.substring(t,t+9).toUpperCase()==="#REQUIRED"?t+=9:e.substring(t,t+8).toUpperCase()==="#IMPLIED"?t+=8:[t]=se(e,t,"ATTLIST default value"),t}}function R(i,e){for(;e<i.length&&/\s/.test(i[e]);)e++;return e}function Y(i,e,t){for(let o=0;o<e.length;o++)if(e[o]!==i[t+o+1])return!1;return!0}function ne(i,e="1.0"){if(!Nt(i,{xmlVersion:e}))throw new Error(`Invalid entity name "${i}"`)}function se(i,e,t){const o=i[e];if(o!=='"'&&o!=="'")throw new Error(`Expected quoted string for ${t}, found "${o}"`);e++;const r=e;for(;e<i.length&&i[e]!==o;)e++;if(i[e]!==o)throw new Error(`Unterminated ${t} value`);const n=i.substring(r,e);return[++e,n]}const jo={allowBooleanAttributes:!1,unpairedTags:[],docType:{maxEntityCount:1/0,maxEntitySize:1/0},invalidCharSequence:{comment:!1,tagValue:!1,attrLt:!1},xmlDeclaraion:{optional:!0,argPosition:!0},multipleRoots:!0,skipTags:[]};class $e{constructor(e){this.options=qo(jo,e)}static validate(e,t){return new $e(t).validate(e)}validate(e){const t=this.options,o=[];let r=!1,n=!1,s=!1;e[0]==="\uFEFF"&&(e=e.substr(1));const a=(p,B,H)=>{throw new _o(B,p,H.line||H,H.col)},c=new Do(t.xmlDeclaraion,a).validate(e),u=c.version;e=e.substring(c.end);const g=new zo(t.docType,u),m=new Oo(t),b=new Ro(u),f=new Mo(t,b,u),y=new Po(t.skipTags),X=t.invalidCharSequence?.tagValue===!0,$=p=>{e.substring(p,p+9).toUpperCase()==="<!DOCTYPE"&&(s&&a("InvalidXml","Multiple DOCTYPE declarations found.",x(e,p)),(r||o.length>0)&&a("InvalidXml","DOCTYPE must appear before the root element.",x(e,p)),s=!0)};for(let p=0;p<e.length;p++)if(e[p]==="<"&&e[p+1]==="?")p+=2,p=this._readPI(e,p,b,a);else if(e[p]==="<"){let B=p;if(p++,e[p]==="!"){try{$(B),p=m.read(e,p,g)}catch(H){a("InvalidDocType",H.message,x(e,p-1))}continue}else{let H=!1;e[p]==="/"&&(H=!0,p++);let T="";for(;p<e.length&&e[p]!==">"&&e[p]!==" "&&e[p]!=="	"&&e[p]!==`
`&&e[p]!=="\r";p++)T+=e[p];if(T=T.trim(),T[T.length-1]==="/"&&(T=T.substring(0,T.length-1),p--),!b.isValidQName(T)){let k;T.trim().length===0?k="Invalid space after '<'.":k="Tag '"+T+"' is an invalid name.",a("InvalidTag",k,x(e,B))}const me=this._readAttributeStr(e,p);me===!1&&a("InvalidAttr","Attributes for '"+T+"' have open quote.",x(e,p));let U=me.value;if(p=me.index,U[U.length-1]==="/"){const k=p-U.length;U=U.substring(0,U.length-1);const G=f.validate(U);G===!0?(n===!0&&!t.multipleRoots&&a("InvalidXml","Multiple possible root nodes found.",x(e,B)),r=!0,o.length===0&&(n=!0),y.push(T),y.pop()):a(G.err.code,G.err.msg,x(e,k+G.err.line))}else if(H)if(!me.tagClosed)a("InvalidTag","Closing tag '"+T+"' doesn't have proper closing.",x(e,p));else if(U.trim().length>0)a("InvalidTag","Closing tag '"+T+"' can't have attributes or invalid starting.",x(e,B));else if(o.length===0)a("InvalidTag","Closing tag '"+T+"' has not been opened.",x(e,B));else{const k=o.pop();if(T!==k.tagName){let G=x(e,k.tagStartPos);a("InvalidTag","Expected closing tag '"+k.tagName+"' (opened in line "+G.line+", col "+G.col+") instead of closing tag '"+T+"'.",x(e,B))}y.pop(),o.length===0&&(n=!0)}else{const k=y.push(T);if(!k){const G=f.validate(U);G!==!0&&a(G.err.code,G.err.msg,x(e,p-U.length+G.err.line))}if(n===!0&&!t.multipleRoots)a("InvalidXml","Multiple possible root nodes found.",x(e,p));else if(t.unpairedTags.indexOf(T)!==-1)y.pop();else if(k){p=Bo.consume(e,T,p+1),y.pop(),o.length===0&&(n=!0),r=!0;continue}else o.push({tagName:T,tagStartPos:B});r=!0}let K="";for(p++;p<e.length;p++)if(e[p]==="<")if(e[p+1]==="!"){p++;try{$(p-1),p=m.read(e,p,g)}catch(k){a("InvalidDocType",k.message,x(e,p-1))}K="";continue}else if(e[p+1]==="?")p+=2,p=this._readPI(e,p,b,a),K="";else break;else if(e[p]==="&"){const k=this._validateAmpersand(e,p);k===-1&&a("InvalidChar","char '&' is not expected.",x(e,p)),p=k,K=""}else{const k=e.charCodeAt(p);kt(k)&&a("IllegalCharacter",`Illegal control character ${Q.describe(k)} in document content.`,x(e,p)),n===!0&&o.length===0&&!rt(e[p])&&a("InvalidXml","Extra text at the end",x(e,p)),X&&(K=(K+e[p]).slice(-2),K==="]]"&&e[p+1]===">"&&a("InvalidXml","Element text content must not contain ']]>'.",x(e,p-1)))}e[p]==="<"&&p--}}else{if(rt(e[p]))continue;n&&a("InvalidXml","Extra text at the end: '"+e[p]+"' is not expected.",x(e,p)),a("InvalidChar","char '"+e[p]+"' is not expected.",x(e,p))}return r?o.length===1?a("InvalidTag","Unclosed tag '"+o[0].tagName+"'.",x(e,o[0].tagStartPos)):o.length>0&&a("InvalidXml","Invalid '"+JSON.stringify(o.map(p=>p.tagName)).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):a("InvalidXml","Start tag expected.",{line:1,col:1}),!0}_readPI(e,t,o,r){const n=t,s=t;let a=!1;for(;t<e.length;t++){const d=e[t];if(!a&&(d===" "||d==="?")){const c=e.substr(s,t-s);a=!0,c.toLowerCase()==="xml"?r("InvalidXml","XML declaration allowed only at the start of the document.",x(e,n-2)):o.isValidName(c)||r("InvalidXml",`Processing instruction target "${c}" is not a valid XML Name.`,x(e,n-2))}if(d==="?"&&e[t+1]===">")return t++,t}r("InvalidXml",'Processing instruction is not closed with "?>".',x(e,n-2))}_readAttributeStr(e,t){let o="",r="",n=!1;for(;t<e.length;t++){if(e[t]==='"'||e[t]==="'")r===""?r=e[t]:r!==e[t]||(r="");else if(e[t]===">"&&r===""){n=!0;break}o+=e[t]}return r!==""?!1:{value:o,index:t,tagClosed:n}}_validateNumberAmpersand(e,t){let o=/\d/;for(e[t]==="x"&&(t++,o=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(o))break}return-1}_validateAmpersand(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,this._validateNumberAmpersand(e,t);let o=0;for(;t<e.length;t++,o++)if(!(e[t].match(/\w/)&&o<20)){if(e[t]===";")break;return-1}return t}}function qo(i,e){const t=Object.assign({},i,e);return t.docType=Object.assign({},i.docType,e?.docType),t.invalidCharSequence=Object.assign({},i.invalidCharSequence,e?.invalidCharSequence),t.xmlDeclaraion=Object.assign({},i.xmlDeclaraion,e?.xmlDeclaraion,e?.xmlDeclaration),t.skipTags=e?.skipTags||i.skipTags,t}const Fo={nameFor:{},skip:{},tags:{valueParsers:[]},attributes:{valueParsers:[]},textJoint:"",alwaysArray:[],forceArray:null,forceTextNode:!1},Vo=["ws","entity","boolean","number"],$o=["entity","number","boolean"];function Ho(i){const e=Me(Fo);(!i||i.tags?.valueParsers===void 0)&&(e.tags.valueParsers=[...Vo]),(!i||i.attributes?.valueParsers===void 0)&&(e.attributes.valueParsers=[...$o]);const t=Array.isArray(i?.alwaysArray)?i.alwaysArray:e.alwaysArray,o=new ie;for(const r of t)Wo(r,"alwaysArray",o);return o.seal(),e._alwaysArraySet=o,i&&Rt(e,i),e}function Me(i){if(i===null||typeof i!="object")return i;if(Array.isArray(i))return i.map(Me);const e={};for(const t of Object.keys(i))e[t]=Me(i[t]);return e}function Rt(i,e){for(const t of Object.keys(e))t==="__proto__"||t==="constructor"||t==="prototype"||(typeof e[t]=="function"||Array.isArray(e[t])?i[t]=e[t]:typeof e[t]=="object"&&e[t]!==null?((typeof i[t]!="object"||i[t]===null)&&(i[t]={}),Rt(i[t],e[t])):i[t]=e[t])}function Wo(i,e,t){let o;if(typeof i=="string"){if(i.length===0)throw new Error(`${e} expression cannot be empty`);o=i}else if(typeof i?.pattern=="string"&&i.pattern.length>0&&Array.isArray(i?.segments))o=i.toString();else throw new Error(`Invalid ${e} entry: expected a string, or Expression.`);const r=new Z(o);return t.add(r),r}const Dt={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},ye=Object.freeze({ALLOW:"allow",BLOCK:"block",THROW:"throw"}),Xo=new Set("!?\\\\/[]$%{}^&*()<>|+");function st(i){if(i[0]==="#")throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${i}"`);for(const e of i)if(Xo.has(e))throw new Error(`[EntityReplacer] Invalid character '${e}' in entity name: "${i}"`);return i}function ae(...i){const e=Object.create(null);for(const t of i)if(t)for(const o of Object.keys(t)){const r=t[o];if(typeof r=="string")e[o]=r;else if(r&&typeof r=="object"&&r.val!==void 0){const n=r.val;typeof n=="string"&&(e[o]=n)}}return e}const J="external",xe="base",Oe="all";function Yo(i){return!i||i===J?new Set([J]):i===Oe?new Set([Oe]):i===xe?new Set([xe]):Array.isArray(i)?new Set(i):new Set([J])}const D=Object.freeze({allow:0,leave:1,remove:2,throw:3}),Qo=new Set([9,10,13]);function Jo(i){if(!i)return{xmlVersion:1,onLevel:D.allow,nullLevel:D.remove};const e=i.xmlVersion===1.1?1.1:1,t=D[i.onNCR]??D.allow,o=D[i.nullNCR]??D.remove,r=Math.max(o,D.remove);return{xmlVersion:e,onLevel:t,nullLevel:r}}class Zo{constructor(e={}){this._limit=e.limit||{},this._maxTotalExpansions=this._limit.maxTotalExpansions||0,this._maxExpandedLength=this._limit.maxExpandedLength||0,this._postCheck=typeof e.postCheck=="function"?e.postCheck:o=>o,this._limitTiers=Yo(this._limit.applyLimitsTo??J),this._numericAllowed=e.numericAllowed??!0,this._baseMap=ae(Dt,e.namedEntities||null),this._externalMap=Object.create(null),this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this._removeSet=new Set(e.remove&&Array.isArray(e.remove)?e.remove:[]),this._leaveSet=new Set(e.leave&&Array.isArray(e.leave)?e.leave:[]);const t=Jo(e.ncr);this._ncrXmlVersion=t.xmlVersion,this._ncrOnLevel=t.onLevel,this._ncrNullLevel=t.nullLevel,this._onExternalEntity=typeof e.onExternalEntity=="function"?e.onExternalEntity:null,this._onInputEntity=typeof e.onInputEntity=="function"?e.onInputEntity:null}_applyRegistrationHook(e,t,o,r){if(!e)return!0;const n=e(t,o);if(n===ye.BLOCK)return!1;if(n===ye.THROW)throw new Error(`[EntityDecoder] Registration of ${r} entity "&${t};" was rejected by hook`);return!0}setExternalEntities(e){if(e)for(const r of Object.keys(e))st(r);if(!this._onExternalEntity){this._externalMap=ae(e);return}const t=ae(e),o=Object.create(null);for(const[r,n]of Object.entries(t))this._applyRegistrationHook(this._onExternalEntity,r,n,"external")&&(o[r]=n);this._externalMap=o}addExternalEntity(e,t){st(e),typeof t=="string"&&t.indexOf("&")===-1&&this._applyRegistrationHook(this._onExternalEntity,e,t,"external")&&(this._externalMap[e]=t)}addInputEntities(e){if(this._totalExpansions=0,this._expandedLength=0,!this._onInputEntity){this._inputMap=ae(e);return}const t=ae(e),o=Object.create(null);for(const[r,n]of Object.entries(t))this._applyRegistrationHook(this._onInputEntity,r,n,"input")&&(o[r]=n);this._inputMap=o}reset(){return this._inputMap=Object.create(null),this._totalExpansions=0,this._expandedLength=0,this}setXmlVersion(e){this._ncrXmlVersion=e===1.1?1.1:1}decode(e){if(typeof e!="string"||e.length===0||e.indexOf("&")===-1)return e;const t=e,o=[],r=e.length;let n=0,s=0;const a=this._maxTotalExpansions>0,d=this._maxExpandedLength>0,c=a||d;for(;s<r;){if(e.charCodeAt(s)!==38){s++;continue}let g=s+1;for(;g<r&&e.charCodeAt(g)!==59&&g-s<=32;)g++;if(g>=r||e.charCodeAt(g)!==59){s++;continue}const m=e.slice(s+1,g);if(m.length===0){s++;continue}let b,f;if(this._removeSet.has(m))b="",f===void 0&&(f=J);else if(this._leaveSet.has(m)){s++;continue}else if(m.charCodeAt(0)===35){const y=this._resolveNCR(m);if(y===void 0){s++;continue}b=y,f=xe}else{const y=this._resolveName(m);b=y?.value,f=y?.tier}if(b===void 0){s++;continue}if(s>n&&o.push(e.slice(n,s)),o.push(b),n=g+1,s=n,c&&this._tierCounts(f)){if(a&&(this._totalExpansions++,this._totalExpansions>this._maxTotalExpansions))throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);if(d){const y=b.length-(m.length+2);if(y>0&&(this._expandedLength+=y,this._expandedLength>this._maxExpandedLength))throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`)}}}n<r&&o.push(e.slice(n));const u=o.length===0?e:o.join("");return this._postCheck(u,t)}_tierCounts(e){return this._limitTiers.has(Oe)?!0:this._limitTiers.has(e)}_resolveName(e){if(e in this._inputMap)return{value:this._inputMap[e],tier:J};if(e in this._externalMap)return{value:this._externalMap[e],tier:J};if(e in this._baseMap)return{value:this._baseMap[e],tier:xe}}_classifyNCR(e){return e===0?this._ncrNullLevel:e>=55296&&e<=57343||this._ncrXmlVersion===1&&e>=1&&e<=31&&!Qo.has(e)?D.remove:-1}_applyNCRAction(e,t,o){switch(e){case D.allow:return String.fromCodePoint(o);case D.remove:return"";case D.leave:return;case D.throw:throw new Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${o.toString(16).toUpperCase().padStart(4,"0")})`);default:return String.fromCodePoint(o)}}_resolveNCR(e){const t=e.charCodeAt(1);let o;if(t===120||t===88?o=parseInt(e.slice(2),16):o=parseInt(e.slice(1),10),Number.isNaN(o)||o<0||o>1114111)return;const r=this._classifyNCR(o);if(!this._numericAllowed&&r<D.remove)return;const n=r===-1?this._ncrOnLevel:Math.max(this._ncrOnLevel,r);return this._applyNCRAction(n,e,o)}}const Ko=[{id:"html-script-open",description:"<script opening tag",pattern:/<script[\s>/]/i},{id:"html-script-close",description:"<\/script closing tag",pattern:/<\/script[\s>]/i},{id:"html-javascript-protocol",description:"javascript: URI scheme (with optional whitespace/encoding)",pattern:/j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i},{id:"html-vbscript-protocol",description:"vbscript: URI scheme",pattern:/vbscript[\t\n\r ]*:/i},{id:"html-data-html",description:"data:text/html URI — can execute scripts in browsers",pattern:/data[\t\n\r ]*:[\t\n\r ]*text\/html/i},{id:"html-data-xhtml",description:"data:application/xhtml+xml URI",pattern:/data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i},{id:"html-data-svg",description:"data:image/svg+xml URI — can execute scripts",pattern:/data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i},{id:"html-inline-event-handler",description:"Inline event handler attributes: onclick=, onerror=, onload=, etc.",pattern:/\bon\w{1,30}\s*=/i},{id:"html-entity-obfuscated-script",description:"HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)",pattern:/(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i},{id:"html-entity-obfuscated-javascript",description:'HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for "j")',pattern:/(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i},{id:"html-style-expression",description:"CSS expression() — IE-era code execution in style attributes",pattern:/style[\s\S]{0,20}expression\s*\(/i},{id:"html-object-embed",description:"<object or <embed tags that can load active content",pattern:/<(?:object|embed)[\s>/]/i},{id:"html-base-tag",description:"<base href= — can hijack all relative URLs on a page",pattern:/<base[\s>]/i},{id:"html-meta-refresh",description:'<meta http-equiv="refresh" — can redirect users',pattern:/<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i},{id:"html-srcdoc",description:"srcdoc= attribute on iframes — embeds HTML that can run scripts",pattern:/srcdoc\s*=/i},{id:"html-iframe",description:"<iframe tag",pattern:/<iframe[\s>/]/i},{id:"html-form",description:"<form tag — can be used for phishing / credential harvesting injection",pattern:/<form[\s>/]/i}],ei=[{id:"xml-cdata-injection",description:"CDATA section injection: <![CDATA[ breaks out of text node context",pattern:/<!\[CDATA\[/i},{id:"xml-cdata-close",description:"CDATA close sequence: ]]> can terminate an enclosing CDATA section",pattern:/\]\]>/},{id:"xml-processing-instruction",description:"XML processing instruction: <?xml-stylesheet or <?php etc.",pattern:/<\?(?:xml[\- ]|php|asp)/i},{id:"xml-doctype-injection",description:"DOCTYPE declaration embedded in content — can define entities",pattern:/<!DOCTYPE(?:[\s[]|$)/i},{id:"xml-entity-system",description:"SYSTEM keyword — used in external entity declarations (XXE)",pattern:/\bSYSTEM\s+["']/i},{id:"xml-entity-public",description:"PUBLIC keyword — used in external entity declarations (XXE)",pattern:/\bPUBLIC\s+["']/i},{id:"xml-entity-declaration",description:"<!ENTITY declaration — defines entities, potential XXE or entity expansion",pattern:/<!ENTITY[\s%]/i},{id:"xml-billion-laughs",description:"Entity reference chaining / billion laughs: repeated &eX; style references",pattern:/(?:&\w{1,20};){3,}/},{id:"xml-namespace-confusion",description:"xmlns: attribute injection — can redefine namespaces to confuse parsers",pattern:/\bxmlns\s*(?::\w{1,40})?\s*=/i},{id:"xml-comment-injection",description:"<!-- comment injection — can hide content from some parsers",pattern:/<!--/},{id:"xml-comment-close",description:"--> closes an enclosing XML comment",pattern:/-->/},{id:"xml-pi-close",description:"?> closes an enclosing processing instruction",pattern:/\?>/}],ti=[{id:"svg-script-element",description:"<script element inside SVG executes JavaScript",pattern:/<script[\s>/]/i},{id:"svg-xlink-href-javascript",description:"xlink:href with javascript: — classic SVG XSS via <a> or <use>",pattern:/xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-href-javascript",description:"href= with javascript: in SVG context (<a>, <animate>, etc.)",pattern:/href\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-foreignobject",description:"<foreignObject embeds HTML inside SVG — can execute scripts",pattern:/<foreignObject[\s>/]/i},{id:"svg-use-external",description:"<use xlink:href or href pointing to external resource (non-fragment URL)",pattern:/<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i},{id:"svg-animate-href",description:'<animate attributeName="href" — can dynamically change href to javascript:',pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i},{id:"svg-animate-xlinkhref",description:'<animate attributeName="xlink:href"',pattern:/<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i},{id:"svg-set-javascript",description:'<set to="javascript:..." — sets an attribute to a javascript: URI',pattern:/<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i},{id:"svg-event-handler",description:"SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.",pattern:/\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i},{id:"svg-handler-generic",description:"Generic on* handler catch-all for SVG attributes",pattern:/\bon\w{1,30}\s*=/i},{id:"svg-filter-feimage",description:"<feImage href= — filter primitive that can load external resources",pattern:/<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i},{id:"svg-image-external",description:"<image xlink:href with http/https or javascript protocol",pattern:/<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i},{id:"svg-style-javascript",description:"style= attribute containing javascript: (e.g. background:url(javascript:...))",pattern:/style\s*=[\s\S]{0,60}javascript\s*:/i}],Lt=[{id:"sql-block-comment-open",description:"SQL block comment open: /* ... */ — unusual in legitimate user text",pattern:/\/\*/},{id:"sql-union-select",description:"UNION SELECT — most common SQL injection aggregation attack",pattern:/\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i},{id:"sql-drop-table",description:"DROP TABLE — destructive DDL injection",pattern:/\bDROP\s{1,20}TABLE\b/i},{id:"sql-drop-database",description:"DROP DATABASE — destructive DDL injection",pattern:/\bDROP\s{1,20}DATABASE\b/i},{id:"sql-insert-into",description:"INSERT INTO — data injection",pattern:/\bINSERT\s{1,20}INTO\b/i},{id:"sql-delete-from",description:"DELETE FROM — data deletion injection",pattern:/\bDELETE\s{1,20}FROM\b/i},{id:"sql-update-set",description:"UPDATE ... SET — data modification injection",pattern:/\bUPDATE\b[\s\S]{1,60}\bSET\b/i},{id:"sql-exec-xp",description:"EXEC xp_ — MSSQL extended stored procedure execution",pattern:/\bEXEC(?:UTE)?\s{1,20}xp_/i},{id:"sql-tautology-string",description:`Classic string tautology: ' OR '1'='1 or " OR "1"="1"`,pattern:/'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i},{id:"sql-tautology-numeric",description:"Numeric tautology: OR 1=1",pattern:/\bOR\s{1,10}1\s*=\s*1\b/i},{id:"sql-always-true-zero",description:"Numeric tautology: OR 0=0",pattern:/\bOR\s{1,10}0\s*=\s*0\b/i},{id:"sql-sleep-benchmark",description:"Time-based blind injection: SLEEP() or BENCHMARK()",pattern:/\b(?:SLEEP|BENCHMARK)\s*\(/i},{id:"sql-waitfor-delay",description:"MSSQL time-based blind injection: WAITFOR DELAY",pattern:/\bWAITFOR\s{1,20}DELAY\b/i},{id:"sql-char-function",description:"CHAR() function — used to obfuscate injected strings",pattern:/\bCHAR\s*\(\s*\d{1,3}/i},{id:"sql-information-schema",description:"INFORMATION_SCHEMA — reconnaissance query for table/column enumeration",pattern:/\bINFORMATION_SCHEMA\b/i}],oi=[{id:"sql-line-comment",description:"SQL line comment: -- followed by whitespace or end of string",pattern:/--(?:\s|$)/},{id:"sql-stacked-query",description:"Stacked queries: semicolon immediately followed by a SQL keyword",pattern:/;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i},{id:"sql-hex-encoding",description:"Hex-encoded string injection: 0x41414141 style (MySQL)",pattern:/\b0x[0-9a-f]{4,}/i}],ii=[...Lt,...oi],ri=[{id:"shell-path-traversal-unix",description:"Unix path traversal: ../  — climbing the directory tree",pattern:/\.\.\//},{id:"shell-path-traversal-windows",description:"Windows path traversal: ..\\ — climbing the directory tree",pattern:/\.\.\\/},{id:"shell-path-traversal-encoded",description:"URL-encoded path traversal: %2e%2e or %2f variants",pattern:/%2e%2e|%2f\.\.|\.\.%2f/i},{id:"shell-null-byte",description:"Null byte injection: \\x00 or %00 — truncates strings in C-backed functions",pattern:/\x00|%00/},{id:"shell-semicolon",description:"Semicolon command separator: cmd1; cmd2",pattern:/;/},{id:"shell-pipe",description:"Pipe operator: cmd1 | cmd2",pattern:/\|/},{id:"shell-and-operator",description:"AND operator: cmd1 && cmd2",pattern:/&&/},{id:"shell-or-operator",description:"OR operator: cmd1 || cmd2",pattern:/\|\|/},{id:"shell-backtick",description:"Backtick command substitution: `cmd`",pattern:/`/},{id:"shell-dollar-paren",description:"Dollar-paren command substitution: $(cmd)",pattern:/\$\(/},{id:"shell-dollar-brace",description:"Dollar-brace variable expansion: ${var} — can be abused for injection",pattern:/\$\{/},{id:"shell-redirect-out",description:"Output redirection: cmd > file or cmd >> file",pattern:/>{1,2}/},{id:"shell-redirect-in",description:"Input redirection: cmd < file",pattern:/</},{id:"shell-newline-injection",description:"Newline injection: \\n or \\r — can inject new shell commands",pattern:/[\n\r]/},{id:"shell-glob-star",description:"Glob expansion: * or ? — can expand to unintended files",pattern:/[/\\][*?]/},{id:"shell-absolute-root",description:"Absolute root path injection: string starting with / or \\ (Windows UNC)",pattern:/^(?:\/|\\\\)/},{id:"shell-windows-drive",description:"Windows drive letter path injection: C:\\ or D:/",pattern:/^[a-zA-Z]:[/\\]/},{id:"shell-curl-wget",description:"curl/wget with URL or flags — can exfiltrate data or download payloads",pattern:/\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i}],ni=[{id:"redos-nested-quantifier-plus",description:"Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.",pattern:/\([^)]*\+[^)]*\)[+*]/},{id:"redos-nested-quantifier-star",description:"Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking",pattern:/\([^)]*\*[^)]*\)[*+]/},{id:"redos-nested-groups",description:"Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic",pattern:/\(\([^)]{0,40}\)[+*]\)[+*]/},{id:"redos-alternation-overlap",description:"Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths",pattern:/\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/},{id:"redos-star-plus-concat",description:"(x*x)+ pattern — triggers super-linear backtracking",pattern:/\([^)]{0,10}\*[^)]{0,10}\)[+*]/},{id:"redos-dot-star-greedy",description:"(.*){n,} or (.+){n,} — repeated greedy dot quantifiers",pattern:/\(\.[*+]\)\{?\d/},{id:"redos-large-repetition",description:"Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking",pattern:/\{\d{4,}(?:,\d*)?\}/},{id:"redos-catastrophic-alternation",description:"Long alternation with many similar branches — polynomial backtracking risk",pattern:/\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/}],M=`["'\\s]*:`,si=[{id:"nosql-where-operator",description:"$where — executes arbitrary JavaScript server-side in MongoDB",pattern:new RegExp(`\\$where${M}`,"i")},{id:"nosql-ne-operator",description:'$ne — "not equal" operator used to bypass equality checks',pattern:new RegExp(`\\$ne${M}`,"i")},{id:"nosql-gt-operator",description:'$gt — "greater than" used to bypass password/value checks',pattern:new RegExp(`\\$gte?${M}`,"i")},{id:"nosql-lt-operator",description:'$lt / $lte — "less than" bypass variants',pattern:new RegExp(`\\$lte?${M}`,"i")},{id:"nosql-regex-operator",description:"$regex — can be used to extract data character by character (blind injection)",pattern:new RegExp(`\\$regex${M}`,"i")},{id:"nosql-or-operator",description:"$or — logical OR; used to create always-true conditions",pattern:new RegExp(`\\$or${M}\\s*\\[`,"i")},{id:"nosql-and-operator",description:"$and — logical AND operator injection",pattern:new RegExp(`\\$and${M}\\s*\\[`,"i")},{id:"nosql-nor-operator",description:"$nor — logical NOR operator injection",pattern:new RegExp(`\\$nor${M}\\s*\\[`,"i")},{id:"nosql-exists-operator",description:"$exists — can enumerate fields to determine schema",pattern:new RegExp(`\\$exists${M}`,"i")},{id:"nosql-in-operator",description:"$in — matches any value in a list; can enumerate values",pattern:new RegExp(`\\$in${M}\\s*\\[`,"i")},{id:"nosql-expr-operator",description:"$expr — allows aggregation expressions in queries (MongoDB 3.6+)",pattern:new RegExp(`\\$expr${M}`,"i")},{id:"nosql-function-operator",description:"$function — executes arbitrary JavaScript in MongoDB 4.4+",pattern:new RegExp(`\\$function${M}`,"i")},{id:"nosql-accumulator-operator",description:"$accumulator — custom aggregation with arbitrary JS execution",pattern:new RegExp(`\\$accumulator${M}`,"i")},{id:"nosql-proto-pollution",description:"__proto__ — prototype pollution via object key injection",pattern:/__proto__/},{id:"nosql-constructor-prototype",description:"constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)",pattern:/constructor[\s"':.,{\[]*prototype/i},{id:"nosql-proto-bracket",description:'["__proto__"] — bracket-notation prototype pollution',pattern:/\[["']__proto__["']\]/}],ai=[{id:"log-crlf-injection",description:"CRLF injection: literal \\r or \\n embeds fake log lines",pattern:/[\r\n]/},{id:"log-url-encoded-crlf",description:"URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers",pattern:/%0[dDaA]/},{id:"log-unicode-newline",description:"Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)",pattern:/[\u2028\u2029]/},{id:"log-log4shell-jndi",description:"Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j",pattern:/\$\{jndi\s*:/i},{id:"log-log4shell-obfuscated",description:"Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection",pattern:/\$\{::-/},{id:"log-log4j-lookup",description:"Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration",pattern:/\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i},{id:"log-ssti-double-brace",description:"SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.",pattern:/\{\{[\s\S]{0,80}\}\}/},{id:"log-ssti-hash-brace",description:"SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB",pattern:/#\{[\s\S]{0,80}\}/},{id:"log-ssti-dollar-brace",description:"SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL",pattern:/\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i},{id:"log-ssti-percent-tag",description:"SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP",pattern:/<%=[\s\S]{0,80}%>/},{id:"log-null-byte",description:"Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers",pattern:/\x00|%00/},{id:"log-ansi-escape",description:"ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed",pattern:/\x1b\[/}],_e={HTML:Ko,XML:ei,SVG:ti,SQL:Lt,"SQL-STRICT":ii,SHELL:ri,REDOS:ni,NOSQL:si,LOG:ai},Ge=Object.freeze(Object.fromEntries(Object.keys(_e).map(i=>[i,i])));function di(i){if(typeof i!="string")throw new TypeError(`is-unsafe: first argument must be a string, got ${typeof i}`)}function ci(i){if(!(i instanceof RegExp)){if(typeof i=="string"){if(!_e[i])throw new TypeError(`is-unsafe: unknown context "${i}". Valid contexts: ${Object.keys(Ge).join(", ")}`);return}if(Array.isArray(i)){if(i.length===0)throw new TypeError("is-unsafe: context array must not be empty");for(const e of i)if(typeof e!="string"||!_e[e])throw new TypeError(`is-unsafe: unknown context "${e}" in array. Valid contexts: ${Object.keys(Ge).join(", ")}`);return}throw new TypeError(`is-unsafe: second argument must be a context string, array of context strings, or RegExp. Got: ${typeof i}`)}}function at(i,e){const t=_e[e];for(const o of t)if(o.pattern.test(i))return{context:e,id:o.id,description:o.description,pattern:o.pattern};return null}function li(i,e){if(di(i),ci(e),e instanceof RegExp)return e.test(i);if(typeof e=="string")return at(i,e)!==null;for(const t of e)if(at(i,t)!==null)return!0;return!1}class ge{constructor(e=!1){this.IS_FINAL=e}init(e){this.ctx=e}reset(){}parse(e,t){throw new Error("You must implement parse() in a value parser.")}}const dt={namedEntities:{...Dt},numericAllowed:!0,onInputEntity:(i,e)=>li(e,[Ge.XML])?ye.BLOCK:ye.ALLOW};class hi extends ge{#e=!1;#t=null;#o=null;constructor(e,t=!1){super(t),this.#o={...dt,...e||{},namedEntities:{...dt.namedEntities,...e?.namedEntities||{}}}}#i(){if(this.#t||(this.#t=new Zo(this.#o)),!this.#e){const e=this.ctx?.get("xmlVersion"),t=this.ctx?.get("inputEntities");e&&this.#t.setXmlVersion(e),t&&this.#t.addInputEntities(t),this.#e=!0}}reset(){this.#e=!1,this.#t&&this.#t.reset()}parse(e){return typeof e!="string"?e:(this.#i(),this.#t.decode(e))}}class ui extends ge{constructor(e,t=!1){super(t);const o=e?.exclude??[],r=new ie;for(const n of o)r.add(typeof n=="string"?new Z(n):n);r.seal(),this._excludeSet=r}parse(e,t){return typeof e!="string"||t&&(t.isAttribute||t.matcher&&(t.matcher.getAnyParentAttr("xml:space")==="preserve"||this._excludeSet.size>0&&this._excludeSet.matchesAny(t.matcher)))?e:pi(e)}}function pi(i){return i.replace(/[ \t\r\n]+/g," ").trim()}class gi extends ge{parse(e){return typeof e=="string"?e.trim():e}}class mi extends ge{constructor(e,t,o=!1){super(o),e?this.trueList=e:this.trueList=["true"],t?this.falseList=t:this.falseList=["false"]}parse(e){if(typeof e=="string"){const t=e.toLowerCase();if(this.trueList.indexOf(t)!==-1)return this.IS_FINAL?new Te(!0):!0;if(this.falseList.indexOf(t)!==-1)return this.IS_FINAL?new Te(!1):!1}return e}}const fi=[48,1632,1776,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,65296,120782,120792,120802,120812,120822,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72688,72784,73040,73120,73552,92768,92864,93008,123200,123632,124144,125264,130032],Pe=255,Be=new Map,Mt=65535,Ot=1632,le=Ot,bi=Mt-Ot+1,Ue=new Uint8Array(bi).fill(Pe);for(const i of fi)for(let e=0;e<10;e++){const t=i+e;t<=Mt?Ue[t-le]=e:Be.set(t,e)}const ct=48,lt=57,ht=45,ve=new Set([8722,65293,65123]);function vi(i){if(typeof i!="string")return i;const e=i.length;if(e===0)return i;let t=-1;for(let r=0;r<e;r++){const n=i.charCodeAt(r);if(!(n>=ct&&n<=lt||n===ht)){if(n<le){if(ve.has(n)){t=r;break}continue}if(n>=55296&&n<=56319){if(r+1<e){const s=i.charCodeAt(r+1);if(s>=56320&&s<=57343){const a=65536+(n-55296<<10)+(s-56320);if(Be.has(a)){t=r;break}}}continue}if(Ue[n-le]!==Pe||ve.has(n)){t=r;break}}}if(t===-1)return i;const o=[];t>0&&o.push(i.slice(0,t));for(let r=t;r<e;r++){const n=i.charCodeAt(r);if(n>=ct&&n<=lt||n===ht){o.push(i[r]);continue}if(n<le){o.push(ve.has(n)?"-":i[r]);continue}if(n>=55296&&n<=56319){if(r+1<e){const a=i.charCodeAt(r+1);if(a>=56320&&a<=57343){const d=65536+(n-55296<<10)+(a-56320),c=Be.get(d);if(c!==void 0){o.push(String.fromCharCode(c+48)),r++;continue}}}o.push(i[r]);continue}if(ve.has(n)){o.push("-");continue}const s=Ue[n-le];o.push(s!==Pe?String.fromCharCode(s+48):i[r])}return o.join("")}const wi=/^[-+]?0x[a-fA-F0-9]+$/,yi=/^0b[01]+$/,xi=/^0o[0-7]+$/,_i=/^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,Ti={hex:!0,binary:!1,octal:!1,leadingZeros:!0,decimalPoint:".",eNotation:!0,infinity:"original",unicode:!1};function Ei(i,e={}){if(e=Object.assign({},Ti,e),!i||typeof i!="string")return i;let t=i.trim();if(t.length===0)return i;if(e.skipLike!==void 0&&e.skipLike.test(t))return i;if(t==="0"||e.unicode&&(t=vi(t),t==="0"))return 0;if(e.hex&&wi.test(t))return Ne(t,16);if(e.binary&&yi.test(t))return Ne(t,2);if(e.octal&&xi.test(t))return Ne(t,8);if(isFinite(t)){if(t.includes("e")||t.includes("E"))return Si(i,t,e);{const o=_i.exec(t);if(o){const r=o[1]||"",n=o[2];let s=Ai(o[3]);const a=r?i[n.length+1]===".":i[n.length]===".";if(!e.leadingZeros&&(n.length>1||n.length===1&&!a))return i;{const d=Number(t),c=String(d);if(d===0)return d;if(c.search(/[eE]/)!==-1)return e.eNotation?d:i;if(t.indexOf(".")!==-1)return c==="0"||c===s||c===`${r}${s}`?d:i;let u=n?s:t;return n?u===c||r+u===c?d:i:u===c||u===r+c?d:i}}else return i}}else return Ii(i,Number(t),e)}const ki=/^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;function Si(i,e,t){if(!t.eNotation)return i;const o=e.match(ki);if(o){let r=o[1]||"";const n=o[3].indexOf("e")===-1?"E":"e",s=o[2],a=r?i[s.length+1]===n:i[s.length]===n;return s.length>1&&a?i:s.length===1&&(o[3].startsWith(`.${n}`)||o[3][0]===n)?Number(e):s.length>0?t.leadingZeros&&!a?(e=(o[1]||"")+o[3],Number(e)):i:Number(e)}else return i}function Ai(i){return i&&i.indexOf(".")!==-1&&(i=i.replace(/0+$/,""),i==="."?i="0":i[0]==="."?i="0"+i:i[i.length-1]==="."&&(i=i.substring(0,i.length-1))),i}function Ne(i,e){const t=i.trim();if((e===2||e===8)&&(i=t.substring(2)),parseInt)return parseInt(i,e);if(Number.parseInt)return Number.parseInt(i,e);if(window&&window.parseInt)return window.parseInt(i,e);throw new Error("parseInt, Number.parseInt, window.parseInt are not supported")}function Ii(i,e,t){const o=e===1/0;switch(t.infinity.toLowerCase()){case"null":return null;case"infinity":return e;case"string":return o?"Infinity":"-Infinity";default:return i}}class Gt extends ge{constructor(e,t=!1){super(t),this.options=e||{}}parse(e){if(typeof e=="string"){const t=Ei(e,this.options);if(typeof t!==e)return this.IS_FINAL?new Te(t):t}return e}}const Ci={entity:new hi,trim:new gi,ws:new ui,boolean:new mi,number:new Gt({hex:!0,leadingZeros:!0,eNotation:!0})};class Ni{constructor(){this.registered={...Ci}}register(e,t){if(!e||typeof e!="string")throw new Error("name must be a string");if(!t)throw new Error("parser is required");if(!t.reset||typeof t.reset!="function")throw new Error("parser must implement reset()");if(!t.parse||typeof t.parse!="function")throw new Error("parser must implement parse()");this.registered[e]=t}reset(e){this.registered[e]?.reset()}resetAll(){for(const e in this.registered)this.registered[e]?.reset()}get(e){const t=this.registered[e];if(!t)throw new Error("parser not found: "+e);return t}}class Pt{constructor(e,t,o,r=!1){this.elementName=e,this.matcher=t,this.isLeafNode=o,this.isAttribute=r}}class Te{constructor(e){this.value=e}}class Bt{#e={};set(e,t){this.#e[e]=t}get(e){return this.#e[e]}clear(){this.#e={}}}class ut{constructor(e=[],t,o=null){this.valParsers=e,this.registry=t,this.sharedContext=o||new Bt,this._initAll(e)}run(e,t){for(let o=0;o<this.valParsers.length;o++){let r=this.valParsers[o];if(typeof r=="string"&&(r=this.registry.get(r)),r){const n=r.parse(e,t);if(n instanceof Te)return n.value;e=n}}return e}resetAll(){for(let e=0;e<this.valParsers.length;e++){let t=this.valParsers[e];typeof t=="string"&&(t=this.registry.get(t)),t&&t.reset&&typeof t.reset=="function"&&t.reset()}}register(e,t){this.registry.register(e,t),t.init&&t.init(this.sharedContext)}_initAll(e){if(!this.sharedContext)return;const t=new Set;for(const o of e){let r=o;typeof o=="string"&&(r=this.registry.get(o)),r&&typeof r.init=="function"&&!t.has(r)&&(t.add(r),r.init(this.sharedContext))}}}const Ri=["ws","entity","boolean","number"],Di=["entity","boolean","number"];class Li{constructor(e,t,o,r,n=!0){this.matcher=o,this._rootName="^",this.parserOptions=e,this.builderOptions=t,this.registry=r;const s=t?.tags?.valueParsers??Ri,a=t?.attributes?.valueParsers??Di;this.sharedContext=new Bt,this.tagsPipeline=new ut(s,this.registry,this.sharedContext),this.attrsPipeline=new ut(a,this.registry,this.sharedContext),n&&(this.tagsPipeline.resetAll(),this.attrsPipeline.resetAll()),this._pendingStopNode=!1}addAttribute(e,t,o){e==="version"&&this.tagName===this._rootName&&this.sharedContext?.set("xmlVersion",+t);const r=`${this.parserOptions.attributes.prefix}${e}${this.parserOptions.attributes.suffix}`,n=new Pt(e,o,!0,!0);this.attributes[r]=this.attrsPipeline.run(t,n)}_addChild(e,t){}addComment(e){this.parserOptions.skip.comment||this.parserOptions.nameFor.comment&&this._addChild(this.parserOptions.nameFor.comment,e)}addLiteral(e){this.parserOptions.skip.cdata||(this.parserOptions.nameFor.cdata?this._addChild(this.parserOptions.nameFor.cdata,e):this.addRawValue(e||""))}addRawValue(e){this.addValue(e)}addInputEntities(e){this.sharedContext?.set("inputEntities",e)}addDeclaration(e){this.addInstruction(e)}addInstruction(e){}onStopNode(e,t){this._pendingStopNode=!0,typeof this.parserOptions.onStopNode=="function"&&this.parserOptions.onStopNode(e,t,this.matcher)}onExit(e){}}class Mi{constructor(e={}){this.builderOptions=e,this.registry=new Ni}registerValueParser(e,t){this.registry.register(e,t)}getInstance(e,t){throw new Error("getInstance is not implemented")}}class He extends Mi{constructor(e={}){super(),this.builderOptions=Ho(e)}getInstance(e,t){return new Ut(e,this.builderOptions,t,this.registry)}}class Ut extends Li{constructor(e,t,o,r){super(e,t,o,r),this.parserOptions=e,this.builderOptions=t,this.tagsStack=[],this.root={},this.parent=this.root,this.tagName=this._rootName,this.value={},this.textValue="",this.attributes={},this.hasAttributes=!1}_buildAttributeValue(){return pt(this.attributes)?(this.hasAttributes=!1,""):(this.hasAttributes=!0,this.parserOptions.attributes.groupBy?{[this.parserOptions.attributes.groupBy]:this.attributes}:this.attributes)}addElement(e){const t=this._buildAttributeValue();this.tagsStack.push([this.tagName,this.textValue,this.value,this.hasAttributes]),this.tagName=e.name,this.value=t,this.textValue="",this.attributes={}}_resolveForceArray(e){let t;this.builderOptions._alwaysArraySet.matchesAny(this.matcher)&&(t=!0);let r;if(typeof this.builderOptions.forceArray=="function"){const n=this.builderOptions.forceArray(this.matcher,e);n===!0?r=!0:n===!1&&(r=!1)}return t===!1||r===!1?!1:t===!0||r===!0}closeElement(){const e=this.tagName;let t=this.value;const o=this.textValue,r=this.hasAttributes,n=typeof t!="object"||Array.isArray(t)||pt(t)||r,s=new Pt(e,this.matcher,n,!1);if(n){const g=this._pendingStopNode?o:this.tagsPipeline.run(o,s);r?g!==""&&g!==null&&g!==void 0?t[this.parserOptions.nameFor.text]=g:this.builderOptions.forceTextNode&&(t[this.parserOptions.nameFor.text]=g):this.builderOptions.forceTextNode?t={[this.parserOptions.nameFor.text]:g}:t=g}else if(o.length>0||this.builderOptions.forceTextNode){const g=this._pendingStopNode?o:this.tagsPipeline.run(o,s);t[this.parserOptions.nameFor.text]=g}let a={tagName:e,value:t};const d=this.tagsStack.pop();let c=d[2];const u=this._resolveForceArray(n);c=this._addChildTo(a.tagName,a.value,c,u),this.tagName=d[0],this.textValue=d[1],this.value=c,this.hasAttributes=d[3],this._pendingStopNode=!1}_addChild(e,t){typeof this.value=="string"&&(this.value={[this.parserOptions.nameFor.text]:this.value}),this._addChildTo(e,t,this.value,!1),this.attributes={}}_addChildTo(e,t,o,r){return typeof o=="string"&&(o={}),Object.prototype.hasOwnProperty.call(o,e)?(Array.isArray(o[e])||(o[e]=[o[e]]),o[e].push(t)):o[e]=r?[t]:t,o}addValue(e){this.textValue.length>0?this.textValue+=`${this.builderOptions.textJoint}${e}`:this.textValue=e}addInstruction(e){const t=this._buildAttributeValue();this._addChild(e,t),this.attributes={}}onExit(e){}getOutput(){return this.value}}function pt(i){return Object.keys(i).length===0}class h extends Error{constructor(e,t,o={}){super(e),this.name="ParseError",this.code=t,this.index=o.index??void 0}toString(){const e=this._posStr();return e?`${this.name} [${this.code}] at ${e}: ${this.message}`:`${this.name} [${this.code}]: ${this.message}`}_posStr(){return this.index!==void 0?`index ${this.index}`:null}}const l=Object.freeze({INVALID_INPUT:"INVALID_INPUT",INVALID_STREAM:"INVALID_STREAM",ALREADY_STREAMING:"ALREADY_STREAMING",NOT_STREAMING:"NOT_STREAMING",DATA_MUST_BE_STRING:"DATA_MUST_BE_STRING",UNEXPECTED_END:"UNEXPECTED_END",UNEXPECTED_CLOSE_TAG:"UNEXPECTED_CLOSE_TAG",MISMATCHED_CLOSE_TAG:"MISMATCHED_CLOSE_TAG",UNEXPECTED_TRAILING_DATA:"UNEXPECTED_TRAILING_DATA",INVALID_TAG:"INVALID_TAG",UNCLOSED_QUOTE:"UNCLOSED_QUOTE",INVALID_ATTRIBUTE_NAME:"INVALID_ATTRIBUTE_NAME",MULTIPLE_NAMESPACES:"MULTIPLE_NAMESPACES",ILLEGAL_CHARACTER:"ILLEGAL_CHARACTER",DUPLICATE_ATTRIBUTE:"DUPLICATE_ATTRIBUTE",UNQUOTED_ATTRIBUTE_VALUE:"UNQUOTED_ATTRIBUTE_VALUE",BOOLEAN_ATTRIBUTE_REJECTED:"BOOLEAN_ATTRIBUTE_REJECTED",SECURITY_PROTOTYPE_POLLUTION:"SECURITY_PROTOTYPE_POLLUTION",SECURITY_RESERVED_OPTION:"SECURITY_RESERVED_OPTION",SECURITY_RESTRICTED_NAME:"SECURITY_RESTRICTED_NAME",LIMIT_MAX_NESTED_TAGS:"LIMIT_MAX_NESTED_TAGS",LIMIT_MAX_ATTRIBUTES:"LIMIT_MAX_ATTRIBUTES",ENTITY_MAX_COUNT:"ENTITY_MAX_COUNT",ENTITY_MAX_SIZE:"ENTITY_MAX_SIZE",ENTITY_MAX_EXPANSIONS:"ENTITY_MAX_EXPANSIONS",ENTITY_MAX_EXPANDED_LENGTH:"ENTITY_MAX_EXPANDED_LENGTH",ENTITY_INVALID_KEY:"ENTITY_INVALID_KEY",ENTITY_INVALID_VALUE:"ENTITY_INVALID_VALUE",UNSUPPORTED_ENCODING:"UNSUPPORTED_ENCODING",INVALID_DECODER:"INVALID_DECODER",ENCODING_MISMATCH:"ENCODING_MISMATCH"});function P(i){return i===" "||i==="	"||i===`
`||i==="\r"||i==="\f"}function he(i){return i===32||i===9||i===10||i===13||i===12}const We=["hasOwnProperty","toString","valueOf","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","toLocaleString","isPrototypeOf","propertyIsEnumerable"],zt=["__proto__","constructor","prototype"],Xe=128;function L(i){return i.startIndex+(i._baseOffset||0)}function v(i){return{index:L(i)}}function Oi(i){return i<=8||i===11||i===12||i>=14&&i<=31}function Ye(i,e){const t=i.length;let o=!1;for(let s=0;s<t;s++){const a=i.charCodeAt(s);if(Oi(a))throw new h(`Illegal control character 0x${a.toString(16).padStart(2,"0")} in document content`,l.ILLEGAL_CHARACTER,e?v(e):{});a===13&&(o=!0)}if(!o)return i;let r="",n=0;for(let s=0;s<t;s++)i.charCodeAt(s)===13&&(r+=i.substring(n,s)+`
`,i.charCodeAt(s+1)===10&&s++,n=s+1);return r+=i.substring(n),r}function F(i,e,t,o=!1){const r=e.length;if(!i.canRead(r))throw new h(`Unexpected end of source reading ${t}`,l.UNEXPECTED_END,v(i));if(i.matchAhead(e,o)!==!0)throw new h(`Invalid ${t}`,l.INVALID_TAG,v(i));i.updateBufferBoundary(r)}function I(i,e,t){if(!i.canRead(e))throw new h(`Unexpected end of source reading ${t}`,l.UNEXPECTED_END,v(i))}const jt=i=>We.includes(i)?"__"+i:i,Gi={skip:{declaration:!1,pi:!1,attributes:!0,cdata:!1,comment:!1,nsPrefix:!1,tags:[],whitespaceText:!0},nameFor:{text:"#text",cdata:"",comment:""},attributes:{booleanType:"allow",duplicate:"overwrite",groupBy:"",prefix:"@_",suffix:""},tags:{unpaired:[],stopNodes:[]},strictReservedNames:!1,onDangerousProperty:jt,sanitizeNames:!0,only:[],doctypeOptions:{enabled:!1,maxEntityCount:100,maxEntitySize:1e4},autoClose:null,limits:{maxNestedTags:null,maxAttributesPerTag:null},feedable:{maxBufferSize:10*1024*1024,autoFlush:!0,flushThreshold:1024,bufferSize:256},exitIf:()=>!1,OutputBuilder:null,decoding:{encoding:"auto",customDecoders:null}},Pi=new Set([...zt,...We]);function de(i,e){if(!(typeof i!="string"||i==="")&&Pi.has(i))throw new h(`SECURITY: '${i}' is a reserved JavaScript keyword and cannot be used as ${e}`,l.SECURITY_RESERVED_OPTION)}const Bi=function(i){if(i&&(i.nameFor?.text&&de(i.nameFor.text,"nameFor.text"),i.nameFor?.cdata&&de(i.nameFor.cdata,"nameFor.cdata"),i.nameFor?.comment&&de(i.nameFor.comment,"nameFor.comment"),i.attributes?.prefix&&de(i.attributes.prefix,"attributes.prefix"),i.attributes?.groupBy&&de(i.attributes.groupBy,"attributes.groupBy"),i.limits!==void 0&&i.limits!==null)){if(typeof i.limits!="object")throw new h(`'limits' must be an object, got ${typeof i.limits}`,l.INVALID_INPUT);const{maxNestedTags:t,maxAttributesPerTag:o}=i.limits;if(t!=null&&(typeof t!="number"||!Number.isInteger(t)||t<1))throw new h(`'limits.maxNestedTags' must be a positive integer, got ${t}`,l.INVALID_INPUT);if(o!=null&&(typeof o!="number"||!Number.isInteger(o)||o<0))throw new h(`'limits.maxAttributesPerTag' must be a non-negative integer, got ${o}`,l.INVALID_INPUT)}const e=ze(Gi);if(i&&qt(e,i),e.OutputBuilder||(e.OutputBuilder=new He),Array.isArray(e.tags?.stopNodes)){const t=new ie;e.tags.stopNodes=e.tags.stopNodes.map(o=>gt(o,"stopNodes",t)),t.seal(),e.tags.stopNodesSet=t}if(Array.isArray(e.skip?.tags)){const t=new ie;e.skip.tags=e.skip.tags.map(o=>gt(o,"skip.tags",t)),t.seal(),e.skip.tagsSet=t}if(e.onDangerousProperty===null&&(e.onDangerousProperty=jt),e.exitIf!==null&&e.exitIf!==void 0&&typeof e.exitIf!="function")throw new h(`'exitIf' must be a function, got ${typeof e.exitIf}`,l.INVALID_INPUT);return e.autoClose=zi(e.autoClose,e),e},Ui=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];function zi(i,e){if(!i)return null;if(i==="html"){const t=e.tags.unpaired||[],o=[...new Set([...t,...Ui])];return e.tags={...e.tags,unpaired:o},{onEof:"closeAll",onMismatch:"discard",collectErrors:!0}}return typeof i=="string"?{onEof:i,onMismatch:"throw",collectErrors:!1}:typeof i=="object"?{onEof:i.onEof||"throw",onMismatch:i.onMismatch||"throw",collectErrors:i.collectErrors||!1}:null}function gt(i,e,t){let o,r,n;if(typeof i=="string"){if(i.length===0)throw new h(`${e} expression cannot be empty`,l.INVALID_INPUT);o=i,r=!1,n=[]}else if(i instanceof Z)o=i.toString(),r=i.data?.nested??!1,n=i.data?.skipEnclosures??[];else if(i&&typeof i=="object"&&i.expression!==void 0){const a=i.expression;if(typeof a=="string"){if(a.length===0)throw new h(`${e} expression cannot be empty`,l.INVALID_INPUT);o=a}else if(a instanceof Z)o=a.toString();else throw new h(`${e} expression must be a string or Expression instance`,l.INVALID_INPUT);r=i.nested===!0,n=Array.isArray(i.skipEnclosures)?i.skipEnclosures:[]}else throw new h(`Invalid ${e} entry: expected a string, Expression, or { expression, nested?, skipEnclosures? } object.`,l.INVALID_INPUT);const s=new Z(o,{},{nested:r,skipEnclosures:n});return t.add(s),s}function ze(i){if(i===null||typeof i!="object")return i;if(Array.isArray(i))return i.map(ze);if(i instanceof RegExp||i instanceof Z)return i;const e={};for(const t of Object.keys(i))e[t]=typeof i[t]=="function"?i[t]:ze(i[t]);return e}function qt(i,e){for(const t of Object.keys(e))t==="__proto__"||t==="constructor"||t==="prototype"||(t==="OutputBuilder"||typeof e[t]=="function"||e[t]instanceof RegExp||Array.isArray(e[t])?i[t]=e[t]:typeof e[t]=="object"&&e[t]!==null?((typeof i[t]!="object"||i[t]===null)&&(i[t]={}),qt(i[t],e[t])):i[t]=e[t])}function Qe(){const i=this.buffer,e=i.length,t=this.startIndex,o=this._quotePairs,r=o.length;let n=0,s=!1,a=!1;for(let d=t;d<e;d++){const c=i[d];if(c==="'")a||(s=!s,n<r&&(o[n++]=d-t));else if(c==='"')s||(a=!a,n<r&&(o[n++]=d-t));else if(c===">"&&!s&&!a)return this._quotePairsLen=n,d-t}return this._quotePairsLen=n,-1}function Je(){const i=this.buffer,e=i.length,t=this.startIndex;let o=!1,r=!1;for(let n=t;n<e;n++){const s=i[n];if(s==="'")r||(o=!o);else if(s==='"')o||(r=!r);else if(s===">"&&!o&&!r)return n-t}return-1}class ji{constructor(e,t={}){this.buffer=e,this.startIndex=0,this._baseOffset=0,this.autoFlush=t.autoFlush!==!1,this.flushThreshold=t.flushThreshold??1024,this._marks=[-1,-1],this._quotePairs=new Int32Array(Xe),this._quotePairsLen=0}markTokenStart(e=0){this._marks[e]=this.startIndex}rewindToMark(){}clearMark(){this._marks[0]=-1,this._marks[1]=-1}flush(){let e=this.startIndex;for(const t of this._marks)t>=0&&t<e&&(e=t);if(e>0){this.buffer=this.buffer.substring(e);const t=this._marks.length;for(let o=0;o<t;o++)this._marks[o]>=0&&(this._marks[o]-=e);this.startIndex-=e,this._baseOffset+=e}}readCh(){return this.buffer[this.startIndex++]}readChAt(e){return this.buffer[this.startIndex+e]}readStr(e,t){return typeof t>"u"&&(t=this.startIndex),this.buffer.substring(t,t+e)}matchAhead(e,t=!1){const o=e.length;for(let r=0;r<o;r++){let n=this.buffer[this.startIndex+r];if(n===void 0)return null;if(t&&(n=n.toLowerCase()),n!==e[r])return!1}return!0}scanTagExpEnd=Qe;scanTagExpEndFast=Je;readUpto(e){const t=this.buffer.length,o=e.length;for(let r=this.startIndex;r<t;r++){let n=!0;for(let s=0;s<o;s++)if(this.buffer[r+s]!==e[s]){n=!1;break}if(n){const s=this.buffer.substring(this.startIndex,r);return this.startIndex=r+o,s}}throw new h(`Unexpected end of source reading '${e}'`,l.UNEXPECTED_END)}readUptoChar(e){const t=this.buffer.indexOf(e,this.startIndex);if(t===-1)throw new h(`Unexpected end of source reading '${e}'`,l.UNEXPECTED_END);const o=this.buffer.substring(this.startIndex,t);return this.startIndex=t+1,o}readUptoCloseTag(e){const t=this.buffer.length,o=e.length;let r=-1,n=0;for(let s=this.startIndex;s<t;s++){if(n===1){const a=this.buffer[s];if(P(a))continue;a===">"?n=2:(n=0,r=-1)}else{let a=!0;for(let d=0;d<o;d++)if(this.buffer[s+d]!==e[d]){a=!1;break}a&&(n=1,r=s,s+=o-1)}if(n===2){const a=this.buffer.substring(this.startIndex,r);return this.startIndex=s+1,a}}throw new h(`Unexpected end of source reading '${e}'`,l.UNEXPECTED_END)}readFromBuffer(e,t){const o=e===1?this.buffer[this.startIndex]:this.buffer.substring(this.startIndex,this.startIndex+e);return t&&this.updateBufferBoundary(e),o}updateBufferBoundary(e=1){this.startIndex+=e,this.autoFlush&&this.startIndex>=this.flushThreshold&&this.flush()}canRead(e=0){return this.startIndex+e<this.buffer.length}}function Ft(i,e="utf8",t=()=>!1){return{readCh(){const{char:o,width:r}=i(this.buffer,this.startIndex);return this.startIndex+=r,o},readChAt(o){return i(this.buffer,this.startIndex+o).char},readStr(o,r){return typeof r>"u"&&(r=this.startIndex),this.buffer.slice(r,r+o).toString(e)},matchAhead(o,r=!1){const n=o.length;for(let s=0;s<n;s++){const a=this.buffer[this.startIndex+s];if(a===void 0)return null;let d=a;if(r&&d>=65&&d<=90&&(d+=32),d!==o.charCodeAt(s))return!1}return!0},scanTagExpEnd(){const o=this.buffer,r=o.length,n=this.startIndex,s=this._quotePairs,a=s.length;let d=0,c=!1,u=!1;for(let g=n;g<r;g++){const m=o[g];if(m===39)u||(c=!c,d<a&&(s[d++]=g-n));else if(m===34)c||(u=!u,d<a&&(s[d++]=g-n));else if(m===62&&!c&&!u)return this._quotePairsLen=d,g-n}return this._quotePairsLen=d,-1},scanTagExpEndFast(){const o=this.buffer,r=o.length,n=this.startIndex;let s=!1,a=!1;for(let d=n;d<r;d++){const c=o[d];if(c===39)a||(s=!s);else if(c===34)s||(a=!a);else if(c===62&&!s&&!a)return d-n}return-1},readUpto(o){const r=this.buffer.length,n=o.length,s=Buffer.from(o);for(let a=this.startIndex;a<r;a++){let d=!0;for(let c=0;c<n;c++)if(this.buffer[a+c]!==s[c]){d=!1;break}if(d){const c=this.buffer.slice(this.startIndex,a).toString(e);return this.startIndex=a+n,c}}throw new h(`Unexpected end of source reading '${o}'`,l.UNEXPECTED_END)},readUptoChar(o){const r=o.charCodeAt(0),n=this.buffer,s=n.length;for(let a=this.startIndex;a<s;a++)if(n[a]===r){const d=n.slice(this.startIndex,a).toString(e);return this.startIndex=a+1,d}throw new h(`Unexpected end of source reading '${o}'`,l.UNEXPECTED_END)},readUptoCloseTag(o){const r=this.buffer.length,n=o.length,s=Buffer.from(o),a=62;let d=-1,c=0;for(let u=this.startIndex;u<r;u++){const g=this.buffer[u];if(c===1){if(he(g))continue;g===a?c=2:(c=0,d=-1)}else{let m=!0;for(let b=0;b<n;b++)if(this.buffer[u+b]!==s[b]){m=!1;break}m&&(c=1,d=u,u+=n-1)}if(c===2){const m=this.buffer.slice(this.startIndex,d).toString(e);return this.startIndex=u+1,m}}throw new h(`Unexpected end of source reading '${o}'`,l.UNEXPECTED_END)},readFromBuffer(o,r){if(o===1){const{char:s,width:a}=i(this.buffer,this.startIndex);return r&&this.updateBufferBoundary(a),s}const n=this.buffer.slice(this.startIndex,this.startIndex+o).toString(e);return r&&this.updateBufferBoundary(o),n},updateBufferBoundary(o=1){this.startIndex+=o,this.autoFlush&&this.startIndex>=this.flushThreshold&&this._tokenStart<0&&this.flush()},canRead(o=0){return this.startIndex+o<this.buffer.length}}}function qi(i,e){return{char:String.fromCharCode(i[e]),width:1}}function Vt(i,e){const t=i[e];let o=1;return(t&128)===0?o=1:(t&224)===192?o=2:(t&240)===224?o=3:(t&248)===240&&(o=4),e+o>i.length&&(o=i.length-e),{char:i.toString("utf8",e,e+o),width:o}}const Fi=Ft(Vt,"utf8");class Vi{constructor(e,t={},o=null){if(this.buffer=o?.bomLength?e.subarray(o.bomLength):e,o?.decodeFirst){const n=o.descriptor.createDecoder();this.buffer=n.write(this.buffer)+n.end()}this.startIndex=0,this._baseOffset=0,this.autoFlush=t.autoFlush!==!1,this.flushThreshold=t.flushThreshold??1024,this._tokenStart=-1,this._quotePairs=new Int32Array(Xe),this._quotePairsLen=0;const r=o?.scanStrategy??Fi;Object.assign(this,r),this.encodingName=o?.descriptor?.name??"utf8",this._quotePairsUsable=o?o.quotePairsUsable!==!1:!1}markTokenStart(){this._tokenStart=this.startIndex}rewindToMark(){}flush(){const e=this._tokenStart>=0?this._tokenStart:this.startIndex;e>0&&(this.buffer=Buffer.from(this.buffer.subarray(e)),this._tokenStart>=0?(this.startIndex-=e,this._tokenStart=0):this.startIndex=0,this._baseOffset+=e)}}function $i(){return{readCh(){return this.buffer[this.startIndex++]},readChAt(i){return this.buffer[this.startIndex+i]},readStr(i,e){return typeof e>"u"&&(e=this.startIndex),this.buffer.substring(e,e+i)},matchAhead(i,e=!1){const t=i.length;for(let o=0;o<t;o++){let r=this.buffer[this.startIndex+o];if(r===void 0)return null;if(e&&(r=r.toLowerCase()),r!==i[o])return!1}return!0},scanTagExpEnd:Qe,scanTagExpEndFast:Je,readUpto(i){const e=this.buffer.length,t=i.length;for(let o=this.startIndex;o<e;o++){let r=!0;for(let n=0;n<t;n++)if(this.buffer[o+n]!==i[n]){r=!1;break}if(r){const n=this.buffer.substring(this.startIndex,o);return this.startIndex=o+t,n}}throw new h(`Unexpected end of source reading '${i}'`,l.UNEXPECTED_END)},readUptoChar(i){const e=this.buffer.indexOf(i,this.startIndex);if(e===-1)throw new h(`Unexpected end of source reading '${i}'`,l.UNEXPECTED_END);const t=this.buffer.substring(this.startIndex,e);return this.startIndex=e+1,t},readUptoCloseTag(i){const e=this.buffer.length,t=i.length;let o=-1,r=0;for(let n=this.startIndex;n<e;n++){if(r===1){const s=this.buffer[n];if(P(s))continue;s===">"?r=2:(r=0,o=-1)}else{let s=!0;for(let a=0;a<t;a++)if(this.buffer[n+a]!==i[a]){s=!1;break}s&&(r=1,o=n,n+=t-1)}if(r===2){const s=this.buffer.substring(this.startIndex,o);return this.startIndex=n+1,s}}throw new h(`Unexpected end of source reading '${i}'`,l.UNEXPECTED_END)},readFromBuffer(i,e){const t=i===1?this.buffer[this.startIndex]:this.buffer.substring(this.startIndex,this.startIndex+i);return e&&this.updateBufferBoundary(i),t},updateBufferBoundary(i=1){this.startIndex+=i,this.autoFlush&&this.startIndex>=this.flushThreshold&&this._tokenStart<0&&this.flush()},canRead(i=0){return this.startIndex+i<this.buffer.length}}}const Hi=200;function $t(i,e){const t=Wi(i,e),o=Xi(i,t?t.bomLength:0);if(t&&o&&!Yi(t.descriptor.name,o,e))throw new h(`Byte-order mark indicates "${t.descriptor.name}" but the XML declaration says encoding="${o}"`,l.ENCODING_MISMATCH);return t?{encoding:t.descriptor.name,bomLength:t.bomLength,declaredEncoding:o}:o?{encoding:o,bomLength:0,declaredEncoding:o}:{encoding:"utf8",bomLength:0,declaredEncoding:null}}function Wi(i,e){for(const t of e.bomCandidates()){const o=t.bomBytes;if(i.length>=o.length&&o.equals(i.subarray(0,o.length)))return{descriptor:t,bomLength:o.length}}return null}function Xi(i,e){const o=i.subarray(e,Math.min(i.length,e+Hi)).toString("latin1").match(/^\s*<\?xml\s+[^?]*\?>/);if(!o)return null;const r=o[0].match(/encoding\s*=\s*["']([^"']+)["']/i);return r?r[1].toLowerCase():null}function Yi(i,e,t){try{return t.resolve(i).name===t.resolve(e).name}catch{return!1}}function oe(i){const e=new TextDecoder(i,{fatal:!1,ignoreBOM:!0});return{write(t){return e.decode(t,{stream:!0})},end(){return e.decode()}}}function Qi(){const i=oe("utf-16le");let e=null;return{write(t){let o=e?Ji(e,t):t;e=null,o.length%2===1&&(e=o.subarray(o.length-1),o=o.subarray(0,o.length-1));const r=Zi(o);return i.write(r)},end(){return i.end()}}}function Ji(i,e){const t=new Uint8Array(i.length+e.length);return t.set(i,0),t.set(e,i.length),t}function Zi(i){const e=new Uint8Array(i);for(let t=0;t+1<e.length;t+=2){const o=e[t];e[t]=e[t+1],e[t+1]=o}return e}class Ht{constructor(){this._byName=new Map,this._seedDefaults()}_seedDefaults(){this.register({name:"utf8",aliases:["utf-8"],bomBytes:Buffer.from([239,187,191]),selfSynchronizing:!0,variableWidth:!0,createDecoder:()=>oe("utf-8")}),this.register({name:"ascii",aliases:[],bomBytes:null,selfSynchronizing:!0,variableWidth:!1,createDecoder:()=>oe("windows-1252")}),this.register({name:"latin1",aliases:["iso-8859-1","binary"],bomBytes:null,selfSynchronizing:!0,variableWidth:!1,createDecoder:()=>oe("iso-8859-1")}),this.register({name:"utf16le",aliases:["utf-16le","ucs2","ucs-2"],bomBytes:Buffer.from([255,254]),selfSynchronizing:!1,variableWidth:!0,createDecoder:()=>oe("utf-16le")}),this.register({name:"utf16be",aliases:["utf-16be"],bomBytes:Buffer.from([254,255]),selfSynchronizing:!1,variableWidth:!0,createDecoder:()=>Qi()})}register(e){if(!e||typeof e.name!="string"||!e.name)throw new h('Encoding descriptor requires a non-empty "name"',l.INVALID_DECODER);if(typeof e.createDecoder!="function")throw new h(`Encoding "${e.name}" is missing createDecoder()`,l.INVALID_DECODER);const t=e.createDecoder();if(!t||typeof t.write!="function"||typeof t.end!="function")throw new h(`Encoding "${e.name}"'s createDecoder() must return an object with write()/end()`,l.INVALID_DECODER);const o={selfSynchronizing:!1,variableWidth:!0,aliases:[],bomBytes:null,...e};this._byName.set(o.name.toLowerCase(),o);for(const r of o.aliases)this._byName.set(r.toLowerCase(),o)}resolve(e){const t=this._byName.get(String(e).toLowerCase());if(!t)throw new h(`Unsupported encoding "${e}"`,l.UNSUPPORTED_ENCODING);return t}bomCandidates(){const e=new Set,t=[];for(const o of this._byName.values())o.bomBytes&&!e.has(o.name)&&(e.add(o.name),t.push(o));return t.sort((o,r)=>r.bomBytes.length-o.bomBytes.length)}}const Wt=new Ht;function Ki(i,e={},t=Wt){const o=e.encoding||"auto";let r,n;if(o==="auto"){const c=$t(i,t);r=c.encoding,n=c.bomLength}else r=o,n=0;const s=t.resolve(r),a=s.selfSynchronizing?Ft(s.name==="utf8"?Vt:qi,s.name):$i(),d=!s.selfSynchronizing||s.name!=="utf8";return{descriptor:s,bomLength:n,scanStrategy:a,decodeFirst:!s.selfSynchronizing,quotePairsUsable:d}}function er(i){return i<=8||i===11||i===12||i>=14&&i<=31}function tr(i,e,t,o){let r="",n=e;for(;e<t;e++){const s=i.charCodeAt(e);if(s===13)r+=i.substring(n,e)+" ",i.charCodeAt(e+1)===10&&e++,n=e+1;else if(s===10||s===9)r+=i.substring(n,e)+" ",n=e+1;else if(er(s))throw new h(`Illegal control character 0x${s.toString(16).padStart(2,"0")} in attribute value`,l.ILLEGAL_CHARACTER,o?v(o.source):{})}return r+=i.substring(n,e),r}function or(i,e,t,o=0,r){const n=[],s=i.length;let a=0;const d=e!==void 0&&o>0;let c=0;for(;a<s;){for(;a<s&&he(i.charCodeAt(a));)a++;if(a>=s)break;const u=a;for(;a<s&&i.charCodeAt(a)!==61&&!he(i.charCodeAt(a));)a++;const g=i.substring(u,a);for(;a<s&&he(i.charCodeAt(a));)a++;if(a>=s||i.charCodeAt(a)!==61){n.push({name:g,value:void 0,startIndex:u});continue}for(a++;a<s&&he(i.charCodeAt(a));)a++;const m=i.charCodeAt(a);if(m!==34&&m!==39)throw new h(`Attribute '${g}' has an unquoted value — attribute values must be wrapped in '"' or "'"`,l.UNQUOTED_ATTRIBUTE_VALUE,r?v(r.source):{});let b=-1;d&&c+1<o&&e[c]===a+t&&(b=e[c+1]-t,c+=2),a++;let f;if(b>=0)f=b;else for(f=a;f<s&&i.charCodeAt(f)!==m;)f++;const y=tr(i,a,f,r);a=f+1,n.push({name:g,value:y,startIndex:u})}return n}function ir(i,e,t,o,r,n){if(!i||i.length===0)return;const s=or(i,o,r,n,e),a=s.length;t._rawAttrMatchCount=a;const d=[];let c=0;const u=e.options.attributes?.duplicate||"overwrite",g=u!=="overwrite"?new Set:null,m=e.options.attributes?.booleanType||"allow";for(let b=0;b<a;b++){const f=s[b];if(g){if(g.has(f.name)){if(u==="throw")throw new h(`Duplicate attribute '${f.name}'`,l.DUPLICATE_ATTRIBUTE,v(e.source));continue}g.add(f.name)}const y=f.value;if(y===void 0){if(m==="throw")throw new h(`Valueless attribute '${f.name}' is not allowed`,l.BOOLEAN_ATTRIBUTE_REJECTED,v(e.source));if(m==="ignore")continue}const X=e.processAttrName(f.name);if(X===!1)continue;c++;const $=y!==void 0?y:!0;t.rawAttributes[f.name]=$,d.push({name:X,value:$,index:f.startIndex})}t.rawAttributesLen=c,t._parsedAttrs=d}function Xt(i,e,t,o){if(!i||i.length===0)return;const r=e.options.limits?.maxAttributesPerTag;if(r!=null&&o>r){const s=e.currentTagDetail?.name??"(unknown)";throw new h(`Tag '${s}' has ${o} attributes, exceeding limit of ${r}`,l.LIMIT_MAX_ATTRIBUTES,v(e.source))}const n=i.length;for(let s=0;s<n;s++){const a=i[s],d=t!==void 0?{index:t+a.index}:void 0;e.outputBuilder.addAttribute(a.name,a.value,e.readonlyMatcher,d)}}class rr{constructor(){this.tagName="",this.selfClosing=!1,this.rawAttributes={},this._attrsExp="",this._attrsExpStart=void 0,this._rawAttrMatchCount=0,this._parsedAttrs=[]}}function nr(i,e){if(i.matchAhead(e)!==!0)return-1;let t=e.length,o=i.readChAt(t);if(o===">")return t+1;for(;P(o);)if(t++,o=i.readChAt(t),o===">")return t+1;return o!==">"?-1:t+1}function sr(i){i.markTokenStart(1);const e=i.startIndex;try{return i.readUptoChar(">").trimEnd()}catch{const o=i.readStr(Number.MAX_SAFE_INTEGER,e);throw new h(`Unexpected end of source reading closing tag '</${o}'`,l.UNEXPECTED_END)}}function mt(i){i.source.markTokenStart(1);const e=L(i.source),t=!i.options.skip.attributes,o=t?i.source.scanTagExpEnd():i.source.scanTagExpEndFast();if(o===-1)throw new h("Unexpected closing of source waiting for '>'",l.UNEXPECTED_END);const r=i.source.readStr(o);i.source.updateBufferBoundary(o+1);const n=t&&i.source._quotePairsUsable!==!1,s=n?i.source._quotePairs:void 0,a=n?i.source._quotePairsLen:0;return Yt(r,i,e,!1,s,a)}function ar(i){i.source.markTokenStart(1);const e=L(i.source);let t=!1,o=!1,r,n=!1;for(r=0;i.source.canRead(r);r++){const a=i.source.readChAt(r),d=i.source.readChAt(r+1);if(a==="'"&&!o?t=!t:a==='"'&&!t&&(o=!o),!t&&!o&&a==="?"&&d===">"){n=!0;break}}if(n){if(t||o)throw new h("Invalid attribute expression. Quote is not properly closed in PI tag expression",l.UNCLOSED_QUOTE)}else throw new h("Unexpected closing of source waiting for '?>'",l.UNEXPECTED_END);const s=i.source.readStr(r);return i.source.updateBufferBoundary(r+2),Yt(s,i,e,!0)}function Yt(i,e,t,o=!1,r=void 0,n=0){const s=new rr,a=i.length;i[a-1]==="/"&&(s.selfClosing=!0,i=i.slice(0,-1));let d="",c=0,u;for(;c<i.length;c++){const g=i[c];if(P(g)){s.tagName=i.substring(0,c),d=i.substring(c+1),u=c+1,t!==void 0&&(s._attrsExpStart=t+c+1);break}}if(s.tagName.length===0&&c===i.length&&(s.tagName=i),s.tagName=s.tagName.trimEnd(),s._attrsExp=d,!e.isValidQName(s.tagName))throw new h("Invalid tag name",l.INVALID_TAG_NAME);return(o||d.length>0)&&ir(d,e,s,r,u,n),s}class ft{constructor(e,{nested:t=!1,skipEnclosures:o=[]}={}){this._tagName=e,this._nested=t,this._enclosures=o,this._content="",this._depth=1,this._active=!1}isActive(){return this._active}activate(){this._active=!0,this._content="",this._depth=1}resumeAfterOpenTag(){this._content="",this._depth=1}collect(e){e.markTokenStart(1);const t=this._enclosures.length;return!this._nested&&t===0?this._collectPlain(e):this._nested&&t===0?this._collectDepthOnly(e):!this._nested&&t>0?this._collectEnclosureOnly(e):this._collectFull(e)}_collectPlain(e){for(;e.canRead();){if(e.readChAt(0)!=="<"){this._content+=e.readCh();continue}if(this._tryConsumeCloseTag(e))return this._finish(e);this._content+=e.readCh()}throw this._unclosedError()}_collectDepthOnly(e){for(;this._depth>0;)if(I(e,0,`stop node <${this._tagName}> content`),this._stepDepthTracking(e))return this._finish(e);throw this._unclosedError()}_collectEnclosureOnly(e){for(;e.canRead();){if(this._trySkipEnclosure(e))continue;if(e.readChAt(0)!=="<"){this._content+=e.readCh();continue}if(this._tryConsumeCloseTag(e))return this._finish(e);this._content+=e.readCh()}throw this._unclosedError()}_collectFull(e){for(;this._depth>0;)if(I(e,0,`stop node <${this._tagName}> content`),!this._trySkipEnclosure(e)&&this._stepDepthTracking(e))return this._finish(e);throw this._unclosedError()}_finish(e){const t=this._content,o={index:L(e)};return this._active=!1,this._content="",this._depth=1,{content:t,end:o}}_trySkipEnclosure(e){const t=this._matchEnclosureOpen(e);if(t===-1)return!1;const o=this._enclosures[t];this._skipChars(e,o.open.length),this._content+=o.open;const r=this._readUpto(e,o.close);return this._content+=r+o.close,!0}_tryConsumeCloseTag(e){const t="</"+this._tagName;if(!this._peekMatch(e,t))return!1;let o=t.length,r=!1;for(;;){const n=e.readChAt(o);if(n===">"){r=!0;break}if(P(n)){o++;continue}break}if(!r)return!1;for(this._skipChars(e,t.length);e.canRead()&&e.readCh()!==">";);return!0}_stepDepthTracking(e){if(e.readChAt(0)!=="<")return this._content+=e.readCh(),!1;if(e.readCh(),I(e,0,`stop node <${this._tagName}> tag after '<'`),e.readChAt(0)==="/"){e.readCh();const a=this._readTagName(e),d=this._readToAngleClose(e);return a===this._tagName&&(this._depth--,this._depth===0)?!0:(this._content+="</"+a+d,!1)}const r=this._readTagName(e);this._content+="<"+r;const{selfClosing:n,attrText:s}=this._readTagTail(e);return this._content+=s,!n&&r===this._tagName&&this._depth++,!1}_unclosedError(){return new h(`Unclosed stop node <${this._tagName}> — unexpected end of input`,l.UNEXPECTED_END)}_matchEnclosureOpen(e){const t=this._enclosures.length;for(let o=0;o<t;o++)if(this._peekMatch(e,this._enclosures[o].open))return o;return-1}_readUpto(e,t){const o=t[0],r=t.length,n=e.startIndex;let s=0;for(;e.canRead();){if(e.readChAt(0)===o&&this._peekMatch(e,t)){const a=e.readStr(s,n);return this._skipChars(e,r),a}e.readCh(),s++}throw new h(`Unclosed stop node <${this._tagName}> — unexpected end looking for '${t}'`,l.UNEXPECTED_END)}_peekMatch(e,t){const o=t.length;for(let r=0;r<o;r++)if(e.readChAt(r)!==t[r])return!1;return!0}_skipChars(e,t){for(let o=0;o<t;o++)e.readCh()}_readTagName(e){let t="";for(;e.canRead();){const o=e.readChAt(0);if(o===">"||o==="/"||P(o))break;t+=e.readCh()}return t}_readTagTail(e){const t=e.startIndex;let o=0,r=!1,n=!1;for(;e.canRead();){const s=e.readCh();if(o++,s==="'"&&!n)r=!r;else if(s==='"'&&!r)n=!n;else if(!r&&!n){if(s===">")return{selfClosing:!1,attrText:e.readStr(o,t)};if(s==="/"&&e.canRead()&&e.readChAt(0)===">")return e.readCh(),o++,{selfClosing:!0,attrText:e.readStr(o,t)}}}throw new h(`Unclosed stop node <${this._tagName}> — unexpected end inside tag`,l.UNEXPECTED_END)}_readToAngleClose(e){const t=e.startIndex;let o=0;for(;e.canRead();){const r=e.readCh();if(o++,r===">")return e.readStr(o,t);if(!P(r))throw new h(`Malformed closing tag for </${this._tagName}>`,l.UNEXPECTED_END)}throw new h(`Unclosed stop node <${this._tagName}> — unexpected end looking for '>'`,l.UNEXPECTED_END)}}function dr(i){i.source.markTokenStart(1),F(i.source,"CDATA[","CDATA preamble");let e=i.source.readUpto("]]>");e=Ye(e,i.source),i.outputBuilder.addLiteral(e)}function cr(i){const e=i.options.skip;i.source.markTokenStart(1);let t=ar(i);if(t)t.tagName==="xml"&&(t.rawAttributes?.version==="1.1"&&(i.xmlDec.version=1.1),i.xmlDec.encoding=t.rawAttributes?.encoding,i.xmlDec.standalone=t.rawAttributes?.standalone,i._nameValidators={});else throw new h("Invalid Pi Tag expression.",l.INVALID_TAG,v(i.source));e.attributes||Xt(t._parsedAttrs,i,t._attrsExpStart,t._rawAttrMatchCount),t.tagName==="xml"?e.declaration||i.outputBuilder.addDeclaration("?xml",i.xmlDec):e.pi||i.outputBuilder.addInstruction("?"+t.tagName)}function lr(i){i.source.markTokenStart(1),F(i.source,"-","comment second dash");let e=i.source.readUpto("-->");e=Ye(e,i.source),i.outputBuilder.addComment(e)}function hr(i){i.source.markTokenStart(1),F(i.source,"OCTYPE","DOCTYPE preamble");const e={};let t=0,o=!1,r=!1;for(;i.source.canRead();){const n=i.source.startIndex;let s=i.source.readCh();if(s==="<"&&o&&!r)try{I(i.source,0,"DOCTYPE sub-tag");let a=i.source.readStr(1);if(i.source.updateBufferBoundary(1),a!=="!")throw new h(`Invalid DOCTYPE body tag starting with "<${a}"`,l.INVALID_TAG,v(i.source));I(i.source,0,"DOCTYPE sub-tag type");let d=i.source.readStr(1);if(i.source.updateBufferBoundary(1),d==="-"){I(i.source,0,"DOCTYPE comment");let c=i.source.readStr(1);if(i.source.updateBufferBoundary(1),c!=="-")throw new h("Invalid comment in DOCTYPE",l.INVALID_TAG,v(i.source));i.source.readUpto("-->")}else if(d==="E"){I(i.source,0,"DOCTYPE E-type sub-tag");let c=i.source.readStr(1);if(i.source.updateBufferBoundary(1),c==="N"){F(i.source,"TITY","DOCTYPE ENTITY keyword");const[u,g]=ur(i);if(g.indexOf("&")===-1){const m=i.options?.doctypeOptions;if(m?.maxEntityCount&&t>=m.maxEntityCount)throw new h(`Entity count (${t+1}) exceeds maximum allowed (${m.maxEntityCount})`,l.ENTITY_MAX_COUNT,v(i.source));const b=u.replace(/[.\-+*:]/g,"\\$&");e[u]={regx:RegExp(`&${b};`,"g"),val:g},t++}}else if(c==="L")F(i.source,"EMENT","DOCTYPE ELEMENT keyword"),pr(i);else throw new h(`Invalid DOCTYPE sub-tag "<!E${c}"`,l.INVALID_TAG,v(i.source))}else if(d==="A")F(i.source,"TTLIST","DOCTYPE ATTLIST keyword"),gr(i);else if(d==="N")F(i.source,"OTATION","DOCTYPE NOTATION keyword"),mr(i);else throw new h(`Invalid DOCTYPE sub-tag "<!${d}"`,l.INVALID_TAG,v(i.source))}catch(a){throw a.code===l.UNEXPECTED_END&&(i.source.startIndex=n),a}else if(s==="[")o=!0;else if(s==="]")r=!0;else if(s===">"&&(!o||r))return e}throw new h("Unclosed DOCTYPE",l.UNEXPECTED_END,v(i.source))}function ur(i){const e=i.source;V(e),I(e,1,"entity name");const t=e.startIndex;let o=0;for(;e.canRead();){const a=e.readCh();if(P(a)||a==='"'||a==="'")break;o++}const r=e.readStr(o,t);if(I(e,1,`entity name "${r}"`),Qt(r,i),V(e),I(e,0,`after entity name "${r}"`),e.canRead(5)&&e.matchAhead("system",!0)===!0)throw new h("External entities are not supported",l.INVALID_TAG,v(e));if(e.readStr(1)==="%")throw new h("Parameter entities are not supported",l.INVALID_TAG,v(e));I(e,0,`entity value for "${r}"`);const[n]=we(e,"entity"),s=i.options?.doctypeOptions;if(s?.maxEntitySize&&n.length>s.maxEntitySize)throw new h(`Entity "${r}" size (${n.length}) exceeds maximum allowed size (${s.maxEntitySize})`,l.ENTITY_MAX_SIZE,v(e));return e.readUptoChar(">"),[r,n]}function pr(i){const e=i.source;V(e),I(e,1,"ELEMENT name");const t=e.startIndex;let o=0;for(;e.canRead();){const s=e.readCh();if(P(s))break;o++}const r=e.readStr(o,t);if(I(e,1,"ELEMENT name"),!i.getNameValidator("name")(r))throw new h(`Invalid element name: "${r}"`,l.INVALID_TAG,v(e));V(e),I(e,1,"ELEMENT name");let n=e.readStr(1);if(n==="E")try{F(e,"EMPTY","ELEMENT content model keyword EMPTY")}catch{return e.readUptoChar(">"),{elementName:r,contentModel:""}}else if(n==="A")try{F(e,"ANY","ELEMENT content model keyword ANY")}catch{return e.readUptoChar(">"),{elementName:r,contentModel:""}}else n==="("&&(e.updateBufferBoundary(1),e.readUptoChar(")"));return e.readUptoChar(">"),{elementName:r}}function gr(i){i.source.readUptoChar(">")}function mr(i){const e=i.source;V(e),I(e,1,"NOTATION name");const t=e.startIndex;let o=0;for(;e.canRead();){const n=e.readCh();if(P(n))break;o++}const r=e.readStr(o,t);if(I(e,1,`after NOTATION name "${r}"`),Qt(r,i),V(e),I(e,6,"NOTATION identifier type"),e.matchAhead("system",!0)===!0)e.updateBufferBoundary(6),V(e),we(e,"systemIdentifier");else if(e.matchAhead("public",!0)===!0){e.updateBufferBoundary(6),V(e),we(e,"publicIdentifier"),V(e),I(e,1,"after NOTATION PUBLIC identifier");let n=e.readStr(1);(n==='"'||n==="'")&&we(e,"systemIdentifier")}else throw new h(`Expected SYSTEM or PUBLIC in NOTATION, found "${e.readStr(6)}"`,l.INVALID_TAG,v(e));e.readUptoChar(">")}function we(i,e){I(i,1,e+" opening quote");let t=i.readStr(1);if(t!=='"'&&t!=="'")throw new h(`Expected quoted string for ${e}, found "${t}"`,l.INVALID_TAG,v(i));return i.updateBufferBoundary(1),[i.readUptoChar(t)]}function V(i){for(;i.canRead();){const e=i.readChAt(0);if(!P(e))break;i.updateBufferBoundary(1)}}function Qt(i,e){if(e.getNameValidator("name")(i))return i;throw new h(`Invalid entity name "${i}"`,l.ENTITY_INVALID_KEY,{})}const ce=Object.freeze({UNCLOSED_EOF:"unclosed-eof",MISMATCHED_CLOSE:"mismatched-close",PHANTOM_CLOSE:"phantom-close",PARTIAL_TAG:"partial-tag"});class fr{constructor(e){this.onEof=e.onEof||"throw",this.onMismatch=e.onMismatch||"throw",this.collectErrors=e.collectErrors||!1,this.errors=[]}handleEof(e){if(this.onEof==="throw")throw new h("Unexpected data in the end of document",l.UNEXPECTED_TRAILING_DATA);const{addTextNode:t,popTag:o}=e;let r=e.currentTagDetail;for(;r&&!r.root;)this._recordError(ce.UNCLOSED_EOF,{tag:r.name,expected:null,index:r.index}),t(),o(),r=e.currentTagDetail}handleMismatch(e,t){const{tagsStack:o,currentTagDetail:r,source:n,addTextNode:s}=t;if(this.onMismatch==="throw")throw new h(`Unexpected closing tag '${e}' expecting '${r.name}'`,l.MISMATCHED_CLOSE_TAG,{index:n?L(n):void 0});if(this.onMismatch==="discard")return this._recordError(ce.MISMATCHED_CLOSE,{tag:e,expected:r.name,index:n?L(n):null}),{action:"discard"};const a=[...o,r];let d=-1;const c=a.length;for(let g=c-1;g>=0;g--)if(a[g].name===e){d=g;break}if(d===-1)return this._recordError(ce.PHANTOM_CLOSE,{tag:e,expected:r.name,index:n?L(n):null}),{action:"discard"};const u=c-1-d;for(let g=0;g<u;g++){const m=a[c-1-g];this._recordError(ce.MISMATCHED_CLOSE,{tag:m.name,expected:e,index:m.index}),s(),t.popTag()}return t.currentTagDetail=a[d],{action:"close-matched"}}handlePartialTag(e,t){this._recordError(ce.PARTIAL_TAG,{tag:br(e),expected:null,index:t.source?L(t.source):null}),t.tagTextData="",this.handleEof(t)}getErrors(){return this.errors.slice()}reset(){this.errors=[]}_recordError(e,t){this.collectErrors&&this.errors.push({type:e,...t})}}function br(i){if(!i)return null;const t=(typeof i.message=="string"?i.message:String(i)).match(/[Rr]eading closing tag '<\/([^']*)/);return t&&t[1]||null}const Jt=2e3,vr={keep:["xml:space"]};function bt(i,e,t){const o=i.get(e);if(o!==void 0||i.has(e))return o;const r=t();return i.size>=Jt&&i.clear(),i.set(e,r),r}class wr{constructor(e,t=0,o=void 0,r=void 0){this.name=e,this.index=t,this.openEnd=o,this.rawName=r}}class yr{constructor(e){this.options=e,this.currentTagDetail=null,this.tagTextData="",this.tagsStack=[],this.doctypeFound=!1,this.matcher=new Le,this.readonlyMatcher=this.matcher.readOnly(),this.autoCloseHandler=e.autoClose?new fr(e.autoClose):null,this._unpairedSet=new Set(this.options.tags.unpaired),this.stopNodeExpressionsSet=this.options.tags.stopNodesSet??new ie,this.stopNodeExpressionsSet.size===0?this.isStopNode=()=>!1:this.isStopNode=_r,this.skipTagExpressionsSet=this.options.skip.tagsSet??new ie,this.skipTagExpressionsSet.size===0?this.isSkipTag=()=>!1:this.isSkipTag=Tr,this._exitIf=typeof e.exitIf=="function"?e.exitIf:()=>!1,this._nameCache=e._nameCache||(e._nameCache={tags:new Map,attrs:new Map})}initializeParser(){this.tagTextData="",this.tagsStack=[],this.doctypeFound=!1,this._stopNodeProcessor=null,this._exitIfTriggered=!1,this._nameValidators={},this._validQNames=new Set,this.xmlDec={version:1,lang:null,encoding:null,standalone:"yes"},this.matcher||(this.matcher=new Le,this.readonlyMatcher=this.matcher.readOnly()),this.outputBuilder=this._createOutputBuilder(),this.root={root:!0,name:""},this.currentTagDetail=this.root}_createOutputBuilder(){return this.options.OutputBuilder.getInstance(this.options,this.readonlyMatcher)}wasExited(){return this._exitIfTriggered===!0}parse(e){return this.source=new ji(e),this.initializeParser(),this._parseAndFinalize(),this.outputBuilder.getOutput()}parseBytesArr(e){const t=this.options.decoding?._registry,o=Ki(e,this.options.decoding,t);return this.source=new Vi(e,{},o),this.initializeParser(),this._parseAndFinalize(),this.outputBuilder.getOutput()}parseXml(){for(;this.source.canRead()&&!this._exitIfTriggered;){this.source.markTokenStart(0);const e=v(this.source),t=this.source.readCh();if(t===void 0||t==="")break;if(t==="<"){const o=e,r=this.source.readChAt(0);if(r==="")throw new h("Unexpected end of source after '<'",l.UNEXPECTED_END,v(this.source));r==="/"?(this.source.updateBufferBoundary(),this.readClosingTag(o)):r==="!"?(this.source.updateBufferBoundary(),this.addTextNode(),this.readSpecialTag(r)):r==="?"?(this.source.updateBufferBoundary(),this.addTextNode(),cr(this)):this.readOpeningTag(o)}else{let o=0;for(;;){const r=this.source.readChAt(o);if(r==="<"||r===void 0||r==="")break;o++}o>0?(this.tagTextData+=t+this.source.readStr(o,this.source.startIndex),this.source.updateBufferBoundary(o)):this.tagTextData+=t}}}finalizeXml(){if(this._exitIfTriggered)return;const e=this.tagsStack.length>0||this.currentTagDetail&&!this.currentTagDetail.root,t=!e&&this.tagTextData!==void 0&&this.tagTextData.trimEnd().length>0;if(e||t)if(this.autoCloseHandler&&e&&!t)this.autoCloseHandler.handleEof(this._parserState());else throw new h("Unexpected data in the end of document",l.UNEXPECTED_TRAILING_DATA,v(this.source))}_parseAndFinalize(){let e=null;this.autoCloseHandler&&this.autoCloseHandler.reset();try{this.parseXml()}catch(t){if(this.autoCloseHandler&&xr(t))e=t;else throw t}if(e){this.autoCloseHandler.handlePartialTag(e,this._parserState());return}this.finalizeXml()}readClosingTag(e){const t=this.currentTagDetail;if(t&&!t.root&&t.rawName!==void 0){const n=nr(this.source,t.rawName);if(n!==-1){this.source.updateBufferBoundary(n);const s={name:t.name,index:e.index,closeEnd:L(this.source)};this.addTextNode(),this.popTag(s);return}}const o=this.processTagName(sr(this.source)),r={name:o,index:e.index,closeEnd:L(this.source)};if(this.isUnpaired(o)||this.isStopNode())throw new h(`Unexpected closing tag '${o}'`,l.UNEXPECTED_CLOSE_TAG,v(this.source));if(o!==this.currentTagDetail.name){if(!this.autoCloseHandler)throw new h(`Unexpected closing tag '${o}' expecting '${this.currentTagDetail.name}'`,l.MISMATCHED_CLOSE_TAG,v(this.source));if(this.autoCloseHandler.handleMismatch(o,this._parserState()).action==="discard")return}this.currentTagDetail.root||this.addTextNode(),this.popTag(r)}readOpeningTag(e){const t=this.options;if(this.addTextNode(),this._stopNodeProcessor&&this._stopNodeProcessor.isActive()){const{tagDetail:f,isSkip:y}=this._stopNodeProcessorMeta;this._stopNodeProcessor.resumeAfterOpenTag(),mt(this),f.openEnd=L(this.source);const{content:X,end:$}=this._stopNodeProcessor.collect(this.source);y||(this.outputBuilder.addElement(f,this.readonlyMatcher),this.outputBuilder.onStopNode?.(f,X,this.readonlyMatcher,$),this.outputBuilder.addValue(X,this.readonlyMatcher),this.outputBuilder.closeElement(this.readonlyMatcher,{name:f.name,closeEnd:$.index})),this.matcher.pop(),this._stopNodeProcessor=null,this._stopNodeProcessorMeta=null;return}let o=mt(this);const r=this.processTagName(o.tagName),n=new wr(r,e.index,L(this.source),o.tagName),s=o.tagName.indexOf(":"),a=s!==-1?o.tagName.slice(0,s):void 0,d=a!==void 0?o.tagName.slice(s+1):r,c=t.limits?.maxNestedTags;if(c!=null){const f=this.tagsStack.length+1;if(f>c)throw new h(`Nesting depth ${f} exceeds limit of ${c} (tag: '${r}')`,l.LIMIT_MAX_NESTED_TAGS,{index:n.index})}let u={},g=0;o.rawAttributes&&(u=o.rawAttributes,g=o.rawAttributesLen),g>0?this.matcher.push(d,u,a,vr):this.matcher.push(d,{},a);const m=this.isStopNode(),b=m?null:this.isSkipTag();if(!t.skip.attributes&&!b&&Xt(o._parsedAttrs,this,o._attrsExpStart,o._rawAttrMatchCount),this.isUnpaired(r))this.outputBuilder.addElement(n,this.readonlyMatcher),this.outputBuilder.closeElement(this.readonlyMatcher,this._closeMetaFor(n)),this.matcher.pop();else if(o.selfClosing)b||(this.outputBuilder.addElement(n,this.readonlyMatcher),this.outputBuilder.closeElement(this.readonlyMatcher,this._closeMetaFor(n))),this.matcher.pop();else if(m){this._stopNodeProcessor=new ft(o.tagName,{nested:m.nested,skipEnclosures:m.skipEnclosures}),this._stopNodeProcessorMeta={tagDetail:n,isSkip:!1},this._stopNodeProcessor.activate();const{content:f,end:y}=this._stopNodeProcessor.collect(this.source);this.outputBuilder.addElement(n,this.readonlyMatcher),this.outputBuilder.onStopNode?.(n,f,this.readonlyMatcher,y),this.outputBuilder.addValue(f,this.readonlyMatcher),this.outputBuilder.closeElement(this.readonlyMatcher,{name:n.name,closeEnd:y.index}),this.matcher.pop(),this._stopNodeProcessor=null,this._stopNodeProcessorMeta=null}else if(b)this._stopNodeProcessor=new ft(o.tagName,{nested:b.nested,skipEnclosures:b.skipEnclosures}),this._stopNodeProcessorMeta={tagDetail:n,isSkip:!0},this._stopNodeProcessor.activate(),this._stopNodeProcessor.collect(this.source),this.matcher.pop(),this._stopNodeProcessor=null,this._stopNodeProcessorMeta=null;else if(this._exitIf(this.readonlyMatcher)){const f=this.tagsStack.length;for(this.matcher.pop();this.currentTagDetail&&!this.currentTagDetail.root;)this.addTextNode(),this.popTag();typeof this.outputBuilder.onExit=="function"&&this.outputBuilder.onExit({tagDetail:n,matcher:this.readonlyMatcher,depth:f}),this._exitIfTriggered=!0}else this.pushTag(n)}pushTag(e){this.tagsStack.push(this.currentTagDetail),this.outputBuilder.addElement(e,this.readonlyMatcher),this.currentTagDetail=e}popTag(e){this.outputBuilder.closeElement(this.readonlyMatcher,e??{name:this.currentTagDetail?.name}),this.matcher.pop(),this.currentTagDetail=this.tagsStack.pop()}_closeMetaFor(e){return{name:e.name,index:e.index,closeEnd:e.openEnd}}readSpecialTag(e){if(e==="!"){let t=this.source.readCh();if(t==null)throw new h("Unexpected end of source after '<!'",l.UNEXPECTED_END,v(this.source));if(t==="-")lr(this);else if(t==="[")dr(this);else if(t==="D"){const o=hr(this);if(this.doctypeFound)throw new h("Multiple DOCTYPE declarations found.",l.INVALID_INPUT,v(this.source));this.doctypeFound=!0,this.options.doctypeOptions.enabled&&o&&Object.keys(o).length>0&&this.outputBuilder.addInputEntities(o)}}else throw new h(`Invalid tag '<${e}'`,l.INVALID_TAG,v(this.source))}addTextNode(){this.tagTextData!==void 0&&this.tagTextData!==""&&(this.tagTextData=Ye(this.tagTextData,this.source),(!this.options.skip.whitespaceText||this.tagTextData.trim().length>0)&&this.outputBuilder.addValue(this.tagTextData,this.readonlyMatcher),this.tagTextData="")}isValidQName(e){const t=this._validQNames;if(t.has(e))return!0;const o=this.getNameValidator("qName")(e);return o&&(t.size>=Jt&&t.clear(),t.add(e)),o}getNameValidator(e){let t=this._nameValidators[e];if(!t){const o=this.xmlDec.version===1.1||this.xmlDec.version==="1.1"?"1.1":"1.0";t=De(e,{xmlVersion:o}),this._nameValidators[e]=t}return t}processAttrName(e){return bt(this._nameCache.attrs,e,()=>{const t=this.options;let o=vt(e,t.skip.nsPrefix);if(!this.getNameValidator("qName")(o))throw new h(`Invalid attribute name: ${o}`,l.INVALID_ATTRIBUTE_NAME,v(this.source));if(o=wt(o,t.onDangerousProperty,t.sanitizeNames,this.source),t.strictReservedNames&&o===t.attributes.groupBy)throw new h(`Restricted attribute name: ${o}`,l.SECURITY_RESTRICTED_NAME,v(this.source));return o})}processTagName(e){return bt(this._nameCache.tags,e,()=>{const t=this.options,o=t.nameFor;let r=vt(e,t.skip.nsPrefix);if(r=wt(r,t.onDangerousProperty,t.sanitizeNames,this.source),t.strictReservedNames&&(r===o.comment||r===o.cdata||r===o.text))throw new h(`Restricted tag name: ${r}`,l.SECURITY_RESTRICTED_NAME,v(this.source));return r})}isUnpaired(e){return this._unpairedSet.has(e)}_parserState(){const e=this;return{get tagsStack(){return e.tagsStack},get currentTagDetail(){return e.currentTagDetail},set currentTagDetail(t){e.currentTagDetail=t},get outputBuilder(){return e.outputBuilder},get readonlyMatcher(){return e.readonlyMatcher},get matcher(){return e.matcher},get source(){return e.source},get tagTextData(){return e.tagTextData},set tagTextData(t){e.tagTextData=t},addTextNode:e.addTextNode.bind(e),popTag:e.popTag.bind(e)}}}function vt(i,e){if(e){const t=i.split(":");if(t.length===2)return t[0]==="xmlns"?!1:t[1];if(t.length>2)throw new h(`Multiple namespaces in name: ${i}`,l.MULTIPLE_NAMESPACES,v(this.source))}return i}function wt(i,e,t,o){if(zt.includes(i))throw new h(`[SECURITY] Invalid name: "${i}" is a reserved JavaScript keyword that could cause prototype pollution`,l.SECURITY_PROTOTYPE_POLLUTION,v(o));return t===!1?i:We.includes(i)?e(i):i}function xr(i){return i instanceof h?i.code===l.UNEXPECTED_END:i.message.startsWith("Unexpected end of source")||i.message.startsWith("Unexpected closing of source")}function _r(){if(this.stopNodeExpressionsSet.size===0)return null;const i=this.stopNodeExpressionsSet.findMatch(this.matcher);return i?i.data:null}function Tr(){if(this.skipTagExpressionsSet.size===0)return null;const i=this.skipTagExpressionsSet.findMatch(this.matcher);return i?i.data:null}const Er=200;class Zt{constructor(e={}){this.buffer="",this.startIndex=0,this.isComplete=!1,this._baseOffset=0,this.maxBufferSize=e.maxBufferSize||10*1024*1024,this.autoFlush=e.autoFlush!==!1,this.flushThreshold=e.flushThreshold||1024,this._decodingOptions=e.decoding||null;const t=this._decodingOptions?.encoding;if(this._detecting=t==="auto",this._sniffBuffer=this._detecting?Buffer.alloc(0):null,!this._detecting&&t&&this._decodingOptions.registry){const o=this._decodingOptions.registry;this._createDecoder=()=>o.resolve(t).createDecoder()}else this._createDecoder=typeof e.createDecoder=="function"?e.createDecoder:null;this._marks=[null,null],this._decoder=null,this._quotePairs=new Int32Array(Xe),this._quotePairsLen=0}feed(e){if(this._detecting)if(typeof e=="string")this._detecting=!1;else{const r=Buffer.isBuffer(e)?e:Buffer.from(e);this._sniffBuffer=this._sniffBuffer.length?Buffer.concat([this._sniffBuffer,r]):r;const n=this._sniffBuffer.includes(Buffer.from("?>"));if(this._sniffBuffer.length<Er&&!n)return 0;e=this._resolveDetection()}let t=this._decodeNow(e);const o=this.buffer.length-this.startIndex;if(o+t.length>this.maxBufferSize)throw new h(`Buffer size limit exceeded (${o+t.length} > ${this.maxBufferSize}). Increase feedable.maxBufferSize or reduce chunk size.`,l.INVALID_INPUT);return this.buffer+=t,t.length}_decodeNow(e){if(typeof e=="string")return e;if(Buffer.isBuffer(e))return this._decoder||(this._decoder=this._createDecoder?this._createDecoder():oe("utf-8")),this._decoder.write(e);if(e?.toString)return e.toString();throw new h("feed() data must be a string or Buffer.",l.DATA_MUST_BE_STRING)}_resolveDetection(){const e=this._decodingOptions.registry,{encoding:t,bomLength:o}=$t(this._sniffBuffer,e),r=e.resolve(t);this._createDecoder=()=>r.createDecoder(),this._detecting=!1;const n=o?this._sniffBuffer.subarray(o):this._sniffBuffer;return this._sniffBuffer=null,n}end(){if(this._detecting){const e=this._resolveDetection();this.buffer+=this._decodeNow(e)}if(this._decoder){const e=this._decoder.end();e&&(this.buffer+=e)}this.isComplete=!0}canRead(e=0){return this.startIndex+e<this.buffer.length}markTokenStart(e=0){this._marks[e]=this.startIndex}rewindToMark(){this._marks[0]!==null&&(this.startIndex=this._marks[0]),this._marks[0]=null,this._marks[1]=null}clearMark(){this._marks[0]=null,this._marks[1]=null}readCh(){return this.buffer[this.startIndex++]}readChAt(e){return this.buffer[this.startIndex+e]}readStr(e,t){return typeof t>"u"&&(t=this.startIndex),this.buffer.substring(t,t+e)}matchAhead(e,t=!1){const o=e.length;for(let r=0;r<o;r++){let n=this.buffer[this.startIndex+r];if(n===void 0)return null;if(t&&(n=n.toLowerCase()),n!==e[r])return!1}return!0}scanTagExpEnd=Qe;scanTagExpEndFast=Je;readUpto(e){const t=this.buffer.length,o=e.length;for(let r=this.startIndex;r<t;r++){let n=!0;for(let s=0;s<o;s++)if(this.buffer[r+s]!==e[s]){n=!1;break}if(n){const s=this.buffer.substring(this.startIndex,r);return this.startIndex=r+o,s}}throw new h(`Unexpected end of source reading '${e}'`,l.UNEXPECTED_END)}readUptoChar(e){const t=this.buffer.indexOf(e,this.startIndex);if(t===-1)throw new h(`Unexpected end of source reading '${e}'`,l.UNEXPECTED_END);const o=this.buffer.substring(this.startIndex,t);return this.startIndex=t+1,o}readUptoCloseTag(e){const t=this.buffer.length,o=e.length;let r=-1,n=0;for(let s=this.startIndex;s<t;s++){if(n===1){const a=this.buffer[s];if(P(a))continue;a===">"?n=2:(n=0,r=-1)}else{let a=!0;for(let d=0;d<o;d++)if(this.buffer[s+d]!==e[d]){a=!1;break}a&&(n=1,r=s,s+=o-1)}if(n===2){const a=this.buffer.substring(this.startIndex,r);return this.startIndex=s+1,a}}throw new h(`Unexpected end of source reading '${e}'`,l.UNEXPECTED_END)}updateBufferBoundary(e=1){this.startIndex+=e,this.autoFlush&&this.startIndex>=this.flushThreshold&&this.flush()}flush(){let e=this.startIndex;for(const t of this._marks)t!==null&&t<e&&(e=t);if(e>0){this.buffer=this.buffer.substring(e);const t=this._marks.length;for(let o=0;o<t;o++)this._marks[o]!==null&&(this._marks[o]-=e);this.startIndex-=e,this._baseOffset+=e}}}class kr extends Zt{attachStream(e,t,o,r){e.on("data",n=>{try{this.feed(n),t(null)}catch(s){t(s)}}),e.on("error",r),e.on("end",()=>{try{this.end(),o()}catch(n){r(n)}})}}class Kt{constructor(e){if(this.options=Bi(e),this._feedParser=null,this._feedSource=null,this._isFeeding=!1,this._pendingBytes=0,this._batchThreshold=this.options.feedable?.bufferSize,this.options.decoding?.customDecoders){const t=new Ht;for(const[o,r]of Object.entries(this.options.decoding.customDecoders))t.register({name:o,...r});this.options.decoding._registry=t}else this.options.decoding=this.options.decoding||{},this.options.decoding._registry=Wt;this.options._nameCache={tags:new Map,attrs:new Map}}parse(e){if(e instanceof Buffer||ArrayBuffer.isView(e))return this.parseBytesArr(e);if(typeof e!="string")if(e&&typeof e.toString=="function")e=e.toString();else throw new h("XML data must be a string or Buffer.",l.INVALID_INPUT);const t=this._createParser(),o=t.parse(e);return this.wasExited=t.wasExited(),this._lastParseErrors=t.autoCloseHandler?.getErrors()??[],o}parseBytesArr(e){if(e instanceof Uint8Array||ArrayBuffer.isView(e))e=Buffer.from(e);else throw new h("XML data must be a Uint8Array or ArrayBufferView.",l.INVALID_INPUT);const t=this._createParser(),o=t.parseBytesArr(e);return this.wasExited=t.wasExited(),this._lastParseErrors=t.autoCloseHandler?.getErrors()??[],o}parseStream(e){if(!Sr(e))throw new h("parseStream() requires a Node.js Readable stream.",l.INVALID_STREAM);const t=new kr({...this.options.feedable,decoding:{encoding:this.options.decoding.encoding,registry:this.options.decoding._registry}}),o=this._createParser();return o.source=t,o.initializeParser(),new Promise((r,n)=>{let s=!1;const a=d=>{s||(s=!0,e.destroy(),n(d))};t.attachStream(e,d=>{if(d){a(d);return}try{o.parseXml()}catch(c){c.code===l.UNEXPECTED_END?t.rewindToMark():a(c)}},()=>{if(!s)try{o.parseXml(),o.finalizeXml(),this._lastParseErrors=o.autoCloseHandler?.getErrors()??[],s=!0,r(o.outputBuilder.getOutput())}catch(d){a(d)}},a)})}_runParse(){if(!this._feedParser)return;const e=L(this._feedSource);try{this._feedParser.parseXml()}catch(r){if(r.code===l.UNEXPECTED_END)this._feedSource.rewindToMark();else throw r}L(this._feedSource)>e?(this._pendingBytes=0,this._batchThreshold=this.options.feedable.bufferSize):this._batchThreshold=Math.min(this._batchThreshold*2,this.options.feedable.maxBufferSize)}feed(e){this._isFeeding||this._initFeedSession();const t=this._feedSource.feed(e);return this._pendingBytes+=t,this._pendingBytes>=this._batchThreshold&&this._runParse(),this}end(){if(!this._isFeeding)throw new h("No data fed. Call feed() before end().",l.NOT_STREAMING);this._runParse();try{this._feedSource.end();let e=null;const t=this._feedParser.autoCloseHandler;t&&t.reset();try{this._feedParser.parseXml()}catch(o){if(o.code===l.UNEXPECTED_END)if(t)e=o;else throw o;else throw o}return e?t.handlePartialTag(e,this._feedParser._parserState()):this._feedParser.finalizeXml(),this._lastParseErrors=t?.getErrors()??[],this.wasExited=this._feedParser.wasExited(),this._feedParser.outputBuilder.getOutput()}finally{this._cleanupFeedSession()}}getParseErrors(){return this._lastParseErrors??[]}_createParser(){return new yr(this.options)}_initFeedSession(){this._feedSource=new Zt({...this.options.feedable,decoding:{encoding:this.options.decoding.encoding,registry:this.options.decoding._registry}}),this._feedParser=this._createParser(),this._feedParser.source=this._feedSource,this._feedParser.initializeParser(),this._isFeeding=!0}_cleanupFeedSession(){this._feedParser=null,this._feedSource=null,this._isFeeding=!1}}function Sr(i){return i!==null&&typeof i=="object"&&typeof i.read=="function"&&typeof i.on=="function"&&typeof i.readableEnded=="boolean"}class Ar extends Ut{constructor(e,t,o,r){super(e,t,o,r),this.siblingOrder=new Map}addElement(e){const t=this.matcher.toString(),o=t.lastIndexOf("."),r=o===-1?"":t.substring(0,o);this.siblingOrder.has(r)||this.siblingOrder.set(r,[]);const n=this.siblingOrder.get(r);n[n.length-1]!==e.name&&n.push(e.name),super.addElement(e)}getOutput(){return{data:super.getOutput(),siblingOrder:this.siblingOrder}}}class Ir extends He{getInstance(e,t){return new Ar(e,this.builderOptions,t,this.registry)}}new Gt({hex:!0,leadingZeros:!0,eNotation:!0,unicode:!0});const eo={tags:{valueParsers:[]},attributes:{valueParsers:[]}};new Kt({skip:{attributes:!1},attributes:{prefix:"",groupBy:"@rules",booleanType:!0},OutputBuilder:new He(eo)});new Kt({skip:{attributes:!1},attributes:{prefix:"",groupBy:":a"},OutputBuilder:new Ir(eo)});const Cr="CONDITION_STRING#LINT_REQUESTED",Nr="CONDITION_STRING_LINT_WORKER#LINTING_COMPLETE",yt="condition_string",Rr="/uxasset/externals/@servicenow/now-code-editor/eslint_7.4.0.jsdbx?sysparm_substitute=false",Dr=5e3,Lr=()=>{let i=!1;self.onmessage=({data:{name:e,payload:{id:t,origin:o,script:r,linterConfig:n,eslintUrl:s}}})=>{if(e==="CONDITION_STRING#LINT_REQUESTED"){if(!i)try{importScripts(`${o}${s}`),i=!0}catch{self.postMessage({name:"CONDITION_STRING_LINT_WORKER#LINTING_COMPLETE",payload:{id:t,result:[]}});return}try{const a=new eslint.Linter;self.postMessage({name:"CONDITION_STRING_LINT_WORKER#LINTING_COMPLETE",payload:{id:t,result:a.verify(r,n)}})}catch{self.postMessage({name:"CONDITION_STRING_LINT_WORKER#LINTING_COMPLETE",payload:{id:t,result:[]}})}}}};let te=null;function Mr(){if(te)return te;if(typeof Worker>"u")return null;try{const i=new Blob([`(${Lr.toString()})()`],{type:"application/javascript"});return te=new Worker(URL.createObjectURL(i)),te.onerror=()=>{te=null},te}catch{return null}}function Or(i){return i=i.replace(/\/\*[\s\S]*?\*\//g,""),i=i.replace(/\/\/.*/g,""),i}function Gr(i){if(!i)return;let e=Or(i);if(e=e.replace(/"[^"\r\n]*"/g,""),e=e.replace(/'[^'\r\n]*'/g,""),e=e.replace(/(={3}|={2})/g,""),e=e.replace(/(!=|<=|>=)/g,""),e.includes("=")&&!/var\s+\S+\s*=/.test(e))return _("Use two equal signs to test equality; conditions should not do assignment",{desc:"Error message for condition string field validation"})}function Pr(i){try{return $e.validate(i).err}catch(e){if(typeof e=="object"&&e!==null&&"line"in e&&"col"in e&&"message"in e&&typeof e.line=="number"&&typeof e.col=="number"&&typeof e.message=="string")return{line:e.line,col:e.col,msg:e.message};throw e}}function xt(i){if(!i)return;let e;if(i.includes("<?xml")&&!i.startsWith("<?xml")){const o=i.indexOf("<?xml"),r=i.substring(0,o).split(`
`).length;return _(Re`Error at line ${r} XML declaration allowed only at the start of the document.`,{desc:"Error message for xml field validation"})}if(i.includes("<?xml")&&i.startsWith("<?xml")){const o=i.indexOf(">");e=i.substring(0,o+1)+"<xml>"+i.substring(o+1)+"</xml>"}else e="<xml>"+i+"</xml>";const t=Pr(e);if(t)return _(Re`Error at line (${t.line}) column (${t.col}) ${t.msg}`,{desc:"Error message for xml field validation"})}function Br(i,e){return new Promise(t=>{const o=Mr();if(!o){t(void 0);return}const r=setTimeout(()=>t(void 0),Dr),n=({data:s})=>{if(s.name===Nr&&s.payload.id===yt){clearTimeout(r),o.removeEventListener("message",n);const d=(s.payload.result||[]).find(c=>c.severity===2);t(d?_(Re`Javascript ${d.message} at line ${d.line} and column ${d.column}`,{desc:"Error message for condition string field validation"}):void 0)}};o.addEventListener("message",n),o.postMessage({name:Cr,payload:{id:yt,origin:window.location.origin,script:i,linterConfig:e,eslintUrl:Rr}})})}function C(i,e,t,o){var r=arguments.length,n=r<3?e:o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}const Ur=255,ue=class ue extends ao{_handleContentChanged(e){const{text:t,errors:o,lintingEnabled:r}=e.detail;this.value=t,this._errors=o,this._lintingEnabled=r,this._hasError=r&&o.length>0,this.dispatchEvent(new CustomEvent(Ce.STAGED_VALUE_CHANGED,{detail:{fieldValue:t,errors:o,lintingEnabled:r},bubbles:!0,composed:!0}))}_handleFocusChanged(e){const{hasFocus:t}=e.detail;t||this.readonly||this.disabled||(this.language==="xml"&&(this._validationErrorMessage=this.value?xt(this.value)??"":""),this.dispatchEvent(new CustomEvent(Ce.VALUE_CHANGED,{detail:{name:this.name,value:this.value,fieldValue:this.value,errorMessage:this._validationErrorMessage||void 0,errors:this._errors,lintingEnabled:this._lintingEnabled},bubbles:!0,composed:!0})))}async _handleInputValueChange(e){const t=e.detail?.value??"";this.value=t,this._validationErrorMessage="";const o=++this._pendingLintId;await this._validateInputValue(t,o),this._isLatestLintRequest(o)&&this._dispatchInputValueChanged(t)}_isLatestLintRequest(e){return e===this._pendingLintId}async _validateInputValue(e,t){if(e){if(this.isConditionString){await this._validateConditionStringInput(e,t);return}this.language==="xml"&&this._setXMLValidationError(e)}}async _validateConditionStringInput(e,t){const o=Gr(e);if(o){this._validationErrorMessage=o;return}const r=this.linterConfig;if(!r||Object.keys(r).length===0)return;const n=await Br(e,r);this._isLatestLintRequest(t)&&n&&(this._validationErrorMessage=n)}_setXMLValidationError(e){const t=xt(e);t&&(this._validationErrorMessage=t)}_dispatchInputValueChanged(e){this.dispatchEvent(new CustomEvent(Ce.VALUE_CHANGED,{detail:{name:this.name,value:e,fieldValue:e,errorMessage:this._validationErrorMessage||void 0,errors:[],lintingEnabled:!1},bubbles:!0,composed:!0}))}_renderCodeEditor(){return A`<aiux-code-editor
      .value=${this.value}
      .language=${this.language}
      .height=${this.height}
      .readOnly=${this.readonly||this.disabled}
      .scrollBeyondLastLine=${this.scrollBeyondLastLine}
      .autoresizeLineLimit=${this.autoresizeLineLimit}
      .scriptField=${this.scriptField}
      .sysId=${this.sysId}
      .recordType=${this.recordType}
      .isClientScript=${this.isClientScript}
      .scope=${this.scope}
      .autocompleteSuggestions=${this.autocompleteSuggestions}
      @AIUX_CODE_EDITOR#CONTENT_CHANGED=${this._handleContentChanged}
      @AIUX_CODE_EDITOR#TEXT_EDITOR_FOCUS_CHANGED=${this._handleFocusChanged}
    ></aiux-code-editor>`}_renderTextInput(){return A`<aiux-control-input
      .name=${this.name}
      .value=${this.value}
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      .required=${this.required}
      ?autofocus=${this.autofocus}
      ?invalid=${this.invalid||!!this._validationErrorMessage}
      .type=${"text"}
      .maxlength=${this.maxlength||void 0}
      @AIUX_CONTROL_INPUT#VALUE_CHANGED=${this._handleInputValueChange}
    ></aiux-control-input>`}_getControlType(){return this.isConditionString?"input":this.language==="xml"?this.maxlength>Ur&&this.isXMLView?"code-editor":"input":"code-editor"}render(){const e=this._getControlType(),t=this._validationErrorMessage,o=t?{status:"critical",content:t}:null,r=o?[...this.messages??[],o]:this.messages,n=e==="input"?this._renderTextInput():this._renderCodeEditor();return this.renderWithLayout(n,this.inlineView(this.value,{readonly:this.readonly}),r)}constructor(...e){super(...e),this.language="javascript",this.height="150px",this.autoresizeLineLimit=0,this.scriptField="",this.sysId="",this.recordType="",this.isClientScript=!1,this.isConditionString=!1,this.isXMLView=!1,this.maxlength=0,this.scope="global",this.scrollBeyondLastLine=!1,this._hasError=!1,this._errors=[],this._lintingEnabled=!1,this._validationErrorMessage="",this._pendingLintId=0}};ue.styles=[...et(ue,ue,"styles")??[]];let E=ue;C([w({type:String})],E.prototype,"language",void 0);C([w({type:String})],E.prototype,"height",void 0);C([w({type:Number})],E.prototype,"autoresizeLineLimit",void 0);C([w({type:String})],E.prototype,"scriptField",void 0);C([w({type:String})],E.prototype,"sysId",void 0);C([w({type:String})],E.prototype,"recordType",void 0);C([w({type:Boolean})],E.prototype,"isClientScript",void 0);C([w({type:Boolean})],E.prototype,"isConditionString",void 0);C([w({type:Boolean})],E.prototype,"isXMLView",void 0);C([w({type:Number})],E.prototype,"maxlength",void 0);C([w({type:String})],E.prototype,"scope",void 0);C([w({type:Boolean})],E.prototype,"scrollBeyondLastLine",void 0);C([w({type:String})],E.prototype,"autocompleteSuggestions",void 0);C([w({type:Object})],E.prototype,"linterConfig",void 0);C([pe()],E.prototype,"_hasError",void 0);C([pe()],E.prototype,"_errors",void 0);C([pe()],E.prototype,"_lintingEnabled",void 0);C([pe()],E.prototype,"_validationErrorMessage",void 0);E=C([qe("aiux-control-code-editor")],E);export{E as AIUXControlCodeEditor};
