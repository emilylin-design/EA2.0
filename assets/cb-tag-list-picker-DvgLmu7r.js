import{p as y,B as g,A as v,i as m,m as o,b as n,e as x,a as p,c as f,T as $,r,t as F}from"./index-D0OV-lQ9.js";const C=20;function w(u){const e=u.trim();return e?`${e}^${g}`:g}function A({encodedFilter:u,limit:e=C,offset:t=0}){return y({limit:e,offset:t,queryParam:w(u)})}function s(u,e,t,l){var d=arguments.length,a=d<3?e:l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(u,e,t,l);else for(var c=u.length-1;c>=0;c--)(h=u[c])&&(a=(d<3?h(a):d>3?h(e,t,a):h(e,t))||a);return d>3&&a&&Object.defineProperty(e,t,a),a}const _="name",E=20,k=[10,20,50],b=class b extends v{connectedCallback(){super.connectedCallback(),this._runFetch()}disconnectedCallback(){super.disconnectedCallback(),this._teleportObserver?.disconnect(),this._teleportObserver=null}async firstUpdated(){await this.updateComplete,requestAnimationFrame(()=>{const t=this.closest("aiux-modal")?.shadowRoot?.querySelector("dialog");t&&(t.style.animationFillMode="none",this._dialogContainer=t,this._teleportObserver=new MutationObserver(l=>{for(const d of l)for(const a of d.addedNodes){const h=a;if(h.tagName==="AIUX-TELEPORT"&&!h.matches(":popover-open"))try{h.showPopover()}catch{}}}),this._teleportObserver.observe(t,{childList:!0}))})}async _runFetch(){this._loading=!0,this._error=!1;try{const{records:e,totalCount:t}=await A({encodedFilter:this._appliedQuery,limit:this._pageSize,offset:this._page*this._pageSize});this._records=e,this._totalCount=t}catch{this._records=[],this._totalCount=0,this._error=!0}finally{this._hasFetched=!0,this._loading=!1}}get _columnDefinitions(){return[{key:_,label:o("Name"),showLink:!0,type:"string"}]}get _rowDefinitions(){return this._records.map(e=>({cells:{[_]:{displayValue:e.name,value:e.sysId}},displayValue:e.name,key:e.sysId}))}_renderLoading(){return n`
      <div
        role="status"
        class="flex items-center justify-center p-12 text-base-content/50"
      >
        <span
          class="aiux-loading aiux-loading-spinner aiux-loading-md me-3"
        ></span>
        <span>${o("Loading…")}</span>
      </div>
    `}_renderError(){return n`
      <div
        role="alert"
        class="rounded-lg border border-error/30 bg-error/10 p-6 text-error"
      >
        <div class="font-semibold mb-2">${o("Failed to load data")}</div>
        <button
          type="button"
          class="aiux-btn aiux-btn-error aiux-btn-sm mt-3"
          @click=${this._handleRetry}
        >
          ${o("Retry")}
        </button>
      </div>
    `}_renderEmpty(){return n`
      <div
        role="status"
        class="flex flex-1 items-center justify-center p-12 text-base-content/60"
      >
        ${o("No tags found")}
      </div>
    `}_renderList(){const e=this._loading&&this._records.length>0;return n`
      <div
        class=${x({relative:!0,flex:!0,"flex-col":!0,"flex-1":!0,"min-h-0":!0,"overflow-hidden":!0,"transition-opacity":!0,"opacity-50":e,"pointer-events-none":e})}
      >
        <aiux-list
          .columnDefinitions=${this._columnDefinitions}
          .rowDefinitions=${this._rowDefinitions}
          .listConfig=${{clickableTextEnabled:!0,enableColumnFiltering:!1}}
          .shadeAlternateRows=${"shadeAlternateRowsOn"}
          @aiux-list:cell-link-clicked=${this._handleCellLinkClick}
        ></aiux-list>
      </div>
    `}_renderFilterToolbar(){const e=!!this._appliedQuery;return n`
      <div class="flex items-center gap-2 pb-2 border-b border-base-300">
        <button
          type="button"
          class=${`aiux-btn aiux-btn-ghost aiux-btn-sm gap-1 ${e?"text-info":""}`}
          aria-label=${o("Filter")}
          aria-expanded=${this._showFilter}
          @click=${this._toggleFilter}
        >
          ${f({name:"filter-outline",size:"sm"})} ${o("Filter")}
        </button>
        ${e?n`<button
              type="button"
              class="aiux-btn aiux-btn-ghost aiux-btn-xs aiux-btn-square"
              aria-label=${o("Clear filters")}
              @click=${this._handleClearFilter}
            >
              ${f({name:"trash-outline",size:"sm"})}
            </button>`:p}
      </div>
      ${this._showFilter?n`
            <div
              class="border border-base-300 bg-base-200/50 rounded-lg p-3 my-2 overflow-visible relative z-10"
              @cb-encoded-query-updated=${this._handleFilterUpdated}
            >
              <aiux-condition-builder
                .tableName=${$}
                .encodedQuery=${this._appliedQuery}
                .filterOptions=${{popoverContainer:this._dialogContainer,showGroupBy:!1,showReferenceLookup:!1,showSortBy:!1,showTagLookup:!1}}
              ></aiux-condition-builder>
              <div class="flex justify-end mt-2">
                <button
                  type="button"
                  class="aiux-btn aiux-btn-info aiux-btn-xs"
                  @click=${this._handleRunFilter}
                >
                  ${o("Run")}
                </button>
              </div>
            </div>
          `:p}
    `}_renderPagination(){return this._totalCount===0?p:n`
      <aiux-pagination
        class="py-2 border-t border-base-300"
        .selectedPage=${this._page}
        .selectedPageSize=${this._pageSize}
        .total=${this._totalCount}
        .pageSizes=${k}
        .visiblePages=${3}
        .pageControlType=${"buttons"}
        ?hideInlinePadding=${!0}
        pageSizeLabel=${o("Records per page")}
        @AIUX_PAGINATION#PAGE_CHANGED=${this._handlePageChange}
        @AIUX_PAGINATION#PAGE_SIZE_CHANGED=${this._handlePageSizeChange}
      ></aiux-pagination>
    `}render(){return n`
      <div class="flex flex-col h-full min-h-0">
        ${this._loading&&this._records.length===0?this._renderLoading():this._error?this._renderError():n`
                ${this._renderFilterToolbar()}
                <div class="flex-1 min-h-0 overflow-y-auto overflow-x-auto">
                  ${this._hasFetched&&this._totalCount===0?this._renderEmpty():this._renderList()}
                </div>
                ${this._renderPagination()}
              `}
      </div>
    `}constructor(...e){super(...e),this._appliedQuery="",this._dialogContainer=null,this._error=!1,this._hasFetched=!1,this._loading=!1,this._page=0,this._pageSize=E,this._pendingQuery="",this._records=[],this._showFilter=!1,this._totalCount=0,this._teleportObserver=null,this._toggleFilter=()=>{this._showFilter=!this._showFilter},this._handleFilterUpdated=t=>{this._pendingQuery=t.detail?.encodedQuery??""},this._handleRunFilter=()=>{this._appliedQuery=this._pendingQuery,this._page=0,this._runFetch()},this._handleClearFilter=()=>{this._appliedQuery="",this._pendingQuery="",this._page=0,this._runFetch()},this._handlePageChange=t=>{this._page=t.detail.value,this._runFetch()},this._handlePageSizeChange=t=>{this._pageSize=t.detail.value,this._page=0,this._runFetch()},this._handleCellLinkClick=t=>{const l=t.detail?.rowData;if(!l)return;const d=l.cells?.[_]?.displayValue??l.displayValue??"";this.dispatchEvent(new CustomEvent("tag-picker:row-selected",{bubbles:!0,composed:!0,detail:{displayValue:d,sysId:l.key}}))},this._handleRetry=()=>{this._runFetch()}}};b.styles=m`
    :host {
      display: block;
      block-size: 100%;
    }
  `;let i=b;s([r()],i.prototype,"_appliedQuery",void 0);s([r()],i.prototype,"_dialogContainer",void 0);s([r()],i.prototype,"_error",void 0);s([r()],i.prototype,"_hasFetched",void 0);s([r()],i.prototype,"_loading",void 0);s([r()],i.prototype,"_page",void 0);s([r()],i.prototype,"_pageSize",void 0);s([r()],i.prototype,"_pendingQuery",void 0);s([r()],i.prototype,"_records",void 0);s([r()],i.prototype,"_showFilter",void 0);s([r()],i.prototype,"_totalCount",void 0);i=s([F("cb-tag-list-picker")],i);export{i as CbTagListPicker};
