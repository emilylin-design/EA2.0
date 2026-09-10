import{A as v,i as x,a as p,m as r,s as f,b as d,c as g,e as y,g as T,n as c,r as b,t as L}from"./index-D0OV-lQ9.js";function o(n,e,a,u){var l=arguments.length,i=l<3?e:u,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,a,u);else for(var h=n.length-1;h>=0;h--)(s=n[h])&&(i=(l<3?s(i):l>3?s(e,a,i):s(e,a))||i);return l>3&&i&&Object.defineProperty(e,a,i),i}let w;const _=()=>w??=T("config-editor-iframe-modal"),I=5e3,m=class m extends v{connectedCallback(){super.connectedCallback(),this._handleKeydown=e=>{e.key!=="Escape"||!this.open||(e.stopPropagation(),e.preventDefault(),this._handleModalClose())},document.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),this._clearLoadTimer(),document.removeEventListener("keydown",this._handleKeydown)}updated(e){super.updated?.(e),e.has("open")&&(this.open?(this._loading=!0,this._error=null,this._startLoadTimer()):this._clearLoadTimer())}_startLoadTimer(){this._clearLoadTimer(),this._loadTimer=setTimeout(()=>{this._loading&&(this._loading=!1,this._error="timeout",_().warn({url:this.IFrameModalURL,title:this.IFrameModalTitle},"iframe load timed out"),this._dispatch("external-tool-modal:error",{message:"timeout",url:this.IFrameModalURL}))},I)}_clearLoadTimer(){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=null)}_handleIframeLoad(){this._clearLoadTimer(),this._loading=!1,this._error=null}_handleIframeError(){this._clearLoadTimer(),this._loading=!1,this._error="error",_().error({url:this.IFrameModalURL,title:this.IFrameModalTitle},"iframe failed to load"),this._dispatch("external-tool-modal:error",{message:"error",url:this.IFrameModalURL})}_handleModalClose(){this._dispatch("external-tool-modal:close",{})}_handleOpenNewTab(){this.IFrameModalURL&&window.open(this.IFrameModalURL,"_blank","noopener")}_dispatch(e,a){this.dispatchEvent(new CustomEvent(e,{detail:a,bubbles:!0,composed:!0}))}_renderLoading(){return this._loading?d`
      <div
        class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-primary"
      >
        <div class="aiux-skeleton h-8 w-48 rounded-lg"></div>
        <div class="aiux-skeleton h-4 w-32 rounded"></div>
        <p class="text-text-tertiary text-sm">
          ${r(f`Loading ${this.IFrameModalTitle||r("tool")}...`)}
        </p>
      </div>
    `:p}_renderError(){const e=this.IFrameModalTitle||r("tool");return d`
      <div
        class="flex flex-col items-center justify-center gap-4 py-12 px-6 text-center h-full"
      >
        <p class="text-text-primary text-lg">
          ${r(f`Unable to load ${e}.`)}
        </p>
        <div class="flex gap-2">
          <button
            class="aiux-btn aiux-btn-primary"
            @click=${this._handleOpenNewTab}
          >
            ${r("Open in new tab")}
          </button>
        </div>
      </div>
    `}render(){return this.open?d`
      <div
        class="modal-overlay fixed inset-0 flex items-center justify-center bg-black/50"
        @click=${this._stopPropagation}
      >
        <div
          class="flex flex-col bg-surface-primary rounded-lg shadow-xl overflow-hidden w-[92%] max-w-[1800px] h-[90vh]"
          role="dialog"
          aria-modal="true"
          aria-label=${this.IFrameModalTitle}
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between px-4 py-3 border-b border-base-300 shrink-0"
          >
            <span class="text-base text-text-primary truncate">
              ${this.IFrameModalTitle}
            </span>
            <button
              class="aiux-btn aiux-btn-ghost aiux-btn-circle aiux-btn-sm"
              @click=${this._handleModalClose}
              aria-label=${r("Close dialog")}
              title=${r("Close dialog")}
            >
              ${g({name:"close-outline",size:"sm"})}
            </button>
          </div>

          <!-- Content -->
          <div class="flex-1 overflow-hidden relative">
            ${this._error?this._renderError():d`
                  <div class="relative w-full h-full">
                    ${this._renderLoading()}
                    <iframe
                      class=${y({"w-full":!0,"h-full":!0,"border-0":!0,block:!0,invisible:this._loading})}
                      src=${this.IFrameModalURL}
                      title=${this.IFrameModalTitle}
                      @load=${this._handleIframeLoad}
                      @error=${this._handleIframeError}
                    ></iframe>
                  </div>
                `}
          </div>
        </div>
      </div>
    `:p}constructor(...e){super(...e),this.open=!1,this.IFrameModalTitle="",this.IFrameModalURL="",this._loading=!0,this._error=null,this._loadTimer=null,this._stopPropagation=a=>a.stopPropagation()}};m.styles=[x`
      :host {
        display: contents;
      }

      /* Must be above the config-editor window wrapper at z-index 2002. */
      .modal-overlay {
        z-index: 2100;
      }
    `];let t=m;o([c({type:Boolean,reflect:!0})],t.prototype,"open",void 0);o([c({type:String})],t.prototype,"IFrameModalTitle",void 0);o([c({type:String})],t.prototype,"IFrameModalURL",void 0);o([b()],t.prototype,"_loading",void 0);o([b()],t.prototype,"_error",void 0);t=o([L("aiux-config-editor-iframe-modal")],t);export{t as ConfigEditorIFrameModal};
