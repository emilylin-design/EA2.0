import{A as g,i as x,d as b,m as n,b as u,g as m,n as o,r as _,t as S}from"./index-D0OV-lQ9.js";import{R as l,D as y}from"./index-BnITaov3.js";import"./index-DJ1oH1xV.js";function s(f,t,e,a){var d=arguments.length,r=d<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(f,t,e,a);else for(var h=f.length-1;h>=0;h--)(c=f[h])&&(r=(d<3?c(r):d>3?c(t,e,r):c(t,e))||r);return d>3&&r&&Object.defineProperty(t,e,r),r}const v=m("record-form-panel"),p=class p extends g{get contextId(){return this._contextIdOverride??`list-edit-${this.sysId}`}set contextId(t){this._contextIdOverride=t}willUpdate(t){if(super.willUpdate(t),l==null)return;const e=l.getById(this.contextId);if(this._isSubmitting||this._isDirty)return;e?.apis?.form?.isDirty?.()&&(b({title:n("Unsaved changes"),message:n("You will lose your work."),confirmLabel:n("Discard"),cancelLabel:n("Keep editing"),preventForcedClose:!0}),this._isDirty=!0)}_checkValidationErrors(){const t=l.getById(this.contextId);if(!t?.apis?.form)return!1;const e=t.apis.form.formMessages;return!!(e?.length&&e.some(a=>a.type==="error"))}_handleCancel(){this.onCancel?.()}async _handleSubmit(){try{if(b(null),this._checkValidationErrors()){this._isSubmitting=!1;return}this._isSubmitting=!0;const t=l.getById(this.contextId);if(!t?.apis?.actions)throw new Error("Record APIs not available");if(await t.apis.actions.executeAction("sysverb_update_and_stay")===!1){v.warn("Save validation failed, keeping panel open"),this._isSubmitting=!1;return}this.onSaveSuccess?.(),this._isSubmitting=!1}catch(t){v.error({error:t instanceof Error?t.message:String(t)},"Failed to save record");const e=t instanceof Error?t.message:"Failed to save record";this._isSubmitting=!1,this.onSaveFailed?.(e)}}render(){const t=l?.getById(this.contextId);return u`
      <!-- Header -->
      <div class="p-4 border-b border-base-300">
        <h2 class="text-xl font-semibold break-words">${this.title}</h2>
      </div>

      <!-- Content: Scrollable -->
      <div class="overflow-y-auto min-h-0 relative">
        <aiux-record-provider
          table=${this.table}
          sysId=${this.sysId}
          view=${this.view||y}
          .forcedViewName=${this.view||y}
          context-id=${this.contextId}
          .requiredAPIs=${["actions","form"]}
        >
          ${t?.loading===void 0||t?.loading?u`<div class="flex items-center justify-center p-8">
                <span
                  class="aiux-loading aiux-loading-spinner aiux-loading-lg"
                ></span>
              </div>`:u`<aiux-record-form></aiux-record-form>`}
        </aiux-record-provider>
      </div>

      <!-- Footer: Fixed at bottom -->
      <div
        class="p-4 flex flex-wrap justify-end gap-2 bg-base-100 border-t border-base-300 shadow-[0_-2px_8px_rgba(0,0,0,0.1)]"
      >
        <button
          class="aiux-btn aiux-btn-ghost"
          @click=${this._handleCancel}
          ?disabled=${this._isSubmitting}
        >
          ${n("Cancel")}
        </button>
        <button
          class="aiux-btn aiux-btn-secondary"
          @click=${this._handleSubmit}
          ?disabled=${this._isSubmitting}
        >
          ${this._isSubmitting?u`<span
                class="aiux-loading aiux-loading-spinner aiux-loading-sm"
              ></span>`:n("Update")}
        </button>
      </div>
    `}constructor(...t){super(...t),this.table="",this.sysId="",this.view="",this.title=n("Edit Record"),this._isSubmitting=!1,this._isDirty=!1}};p.styles=[...Array.isArray(g.styles)?g.styles:[],x`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto;
        height: 100%;
        overflow: hidden;
      }
    `],p.contextCollections=[l];let i=p;s([o({type:String})],i.prototype,"table",void 0);s([o({type:String})],i.prototype,"sysId",void 0);s([o({type:String})],i.prototype,"view",void 0);s([o({type:String})],i.prototype,"title",void 0);s([o({attribute:!1})],i.prototype,"onCancel",void 0);s([o({attribute:!1})],i.prototype,"onSaveSuccess",void 0);s([o({attribute:!1})],i.prototype,"onSaveFailed",void 0);s([_()],i.prototype,"_isSubmitting",void 0);s([o({type:String})],i.prototype,"contextId",null);i=s([S("aiux-record-form-panel")],i);export{i as AIUXRecordFormPanel};
