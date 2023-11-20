import headerCom from '../components/headerCom.vue'
import blogTagsCom from '../components/blogTagsCom.vue'
import footerCom from '../components/footerCom.vue'
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './projectDetailsComp.vue'

function __VLS_template () {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {}
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C}  ? C : {}> & typeof __VLS_componentsOption
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $scopedSlots: typeof __VLS_slots} )>
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'center'?: boolean}  &
{ 'title'?: boolean}  &
{ 'text'?: boolean}  &
{ 'hidden'?: boolean}  &
{ 'banner'?: boolean}  &
{ 'content'?: boolean}  &
{ 'article'?: boolean}  &
{ 'wrapper'?: boolean}  &
{ 'breadcrumbs'?: boolean}  &
{ 'tags'?: boolean}  &
{ 'blog'?: boolean} 
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[]
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'headerCom', typeof __VLS_localComponents, "HeaderCom", "headerCom", "headerCom"> &
__VLS_WithComponent<'blogTagsCom', typeof __VLS_localComponents, "BlogTagsCom", "blogTagsCom", "blogTagsCom"> &
__VLS_WithComponent<'footerCom', typeof __VLS_localComponents, "FooterCom", "footerCom", "footerCom">
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div
__VLS_components.HeaderCom; __VLS_components.headerCom;
// @ts-ignore
[headerCom,]
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1
__VLS_intrinsicElements.br; __VLS_intrinsicElements.br
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p
__VLS_intrinsicElements.ol; __VLS_intrinsicElements.ol
__VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li; __VLS_intrinsicElements.li
__VLS_components.BlogTagsCom; __VLS_components.blogTagsCom;
// @ts-ignore
[blogTagsCom,]
__VLS_components.FooterCom; __VLS_components.footerCom;
// @ts-ignore
[footerCom,]
{
const __VLS_0 = __VLS_intrinsicElements["div"]
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0)
const __VLS_2 = __VLS_1({ ...{}, class: ("blogPages"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("blogPages"), })
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
{
let __VLS_5!: 'HeaderCom' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.HeaderCom : 'headerCom' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.headerCom : (typeof __VLS_resolvedLocalAndGlobalComponents)['headerCom']
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { headerCom: typeof __VLS_5} ).headerCom
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, })
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
}
{
const __VLS_10 = __VLS_intrinsicElements["section"]
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10)
const __VLS_12 = __VLS_11({ ...{}, class: ("banner center"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("banner center"), })
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
}
{
const __VLS_15 = __VLS_intrinsicElements["section"]
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15)
const __VLS_17 = __VLS_16({ ...{}, class: ("content center"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("content center"), })
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>
{
const __VLS_20 = __VLS_intrinsicElements["div"]
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20)
const __VLS_22 = __VLS_21({ ...{}, class: ("article"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("article"), })
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>
{
const __VLS_25 = __VLS_intrinsicElements["h1"]
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25)
const __VLS_27 = __VLS_26({ ...{}, class: ("title article__title"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("title article__title"), })
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
(__VLS_28.slots!).default
}
{
const __VLS_30 = __VLS_intrinsicElements["div"]
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30)
const __VLS_32 = __VLS_31({ ...{}, class: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("text"), })
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>
{
const __VLS_35 = __VLS_intrinsicElements["br"]
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35)
const __VLS_37 = __VLS_36({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, })
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>
}
{
const __VLS_40 = __VLS_intrinsicElements["br"]
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40)
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, })
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>
}
(__VLS_33.slots!).default
}
{
const __VLS_45 = __VLS_intrinsicElements["img"]
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45)
const __VLS_47 = __VLS_46({ ...{}, class: ("article__img2"), src: ("../assets/blogDetails-img2.png"), alt: ("blogDetails-img2"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("article__img2"), src: ("../assets/blogDetails-img2.png"), alt: ("blogDetails-img2"), })
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>
}
{
const __VLS_50 = __VLS_intrinsicElements["h1"]
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50)
const __VLS_52 = __VLS_51({ ...{}, class: ("title article__title"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, class: ("title article__title"), })
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
(__VLS_53.slots!).default
}
{
const __VLS_55 = __VLS_intrinsicElements["p"]
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55)
const __VLS_57 = __VLS_56({ ...{}, class: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("text"), })
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
(__VLS_58.slots!).default
}
{
const __VLS_60 = __VLS_intrinsicElements["ol"]
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60)
const __VLS_62 = __VLS_61({ ...{}, class: ("article__list text"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("article__list text"), })
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>
{
const __VLS_65 = __VLS_intrinsicElements["li"]
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65)
const __VLS_67 = __VLS_66({ ...{}, class: ("article__listElement"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("article__listElement"), })
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default
}
{
const __VLS_70 = __VLS_intrinsicElements["li"]
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70)
const __VLS_72 = __VLS_71({ ...{}, class: ("article__listElement"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, class: ("article__listElement"), })
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
(__VLS_73.slots!).default
}
{
const __VLS_75 = __VLS_intrinsicElements["li"]
const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75)
const __VLS_77 = __VLS_76({ ...{}, class: ("article__listElement"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, class: ("article__listElement"), })
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
(__VLS_78.slots!).default
}
(__VLS_63.slots!).default
}
{
const __VLS_80 = __VLS_intrinsicElements["img"]
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80)
const __VLS_82 = __VLS_81({ ...{}, class: ("article__img3"), src: ("../assets/blogDetails-img3.png"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("article__img3"), src: ("../assets/blogDetails-img3.png"), alt: (""), })
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>
}
{
const __VLS_85 = __VLS_intrinsicElements["p"]
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85)
const __VLS_87 = __VLS_86({ ...{}, class: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, class: ("text"), })
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
(__VLS_88.slots!).default
}
(__VLS_23.slots!).default
}
{
let __VLS_90!: 'BlogTagsCom' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BlogTagsCom : 'blogTagsCom' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.blogTagsCom : (typeof __VLS_resolvedLocalAndGlobalComponents)['blogTagsCom']
const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{}, }));
({} as { blogTagsCom: typeof __VLS_90} ).blogTagsCom
const __VLS_92 = __VLS_91({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, })
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>
}
(__VLS_18.slots!).default
}
{
let __VLS_95!: 'FooterCom' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FooterCom : 'footerCom' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.footerCom : (typeof __VLS_resolvedLocalAndGlobalComponents)['footerCom']
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, }));
({} as { footerCom: typeof __VLS_95} ).footerCom
const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, })
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>
}
(__VLS_3.slots!).default
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["blogPages"]
__VLS_styleScopedClasses["banner"]
__VLS_styleScopedClasses["center"]
__VLS_styleScopedClasses["content"]
__VLS_styleScopedClasses["center"]
__VLS_styleScopedClasses["article"]
__VLS_styleScopedClasses["title"]
__VLS_styleScopedClasses["article__title"]
__VLS_styleScopedClasses["text"]
__VLS_styleScopedClasses["article__img2"]
__VLS_styleScopedClasses["title"]
__VLS_styleScopedClasses["article__title"]
__VLS_styleScopedClasses["text"]
__VLS_styleScopedClasses["article__list"]
__VLS_styleScopedClasses["text"]
__VLS_styleScopedClasses["article__listElement"]
__VLS_styleScopedClasses["article__listElement"]
__VLS_styleScopedClasses["article__listElement"]
__VLS_styleScopedClasses["article__img3"]
__VLS_styleScopedClasses["text"]
}
var __VLS_slots!: {}
return __VLS_slots
}
