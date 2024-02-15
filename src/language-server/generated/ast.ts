/******************************************************************************
 * This file was generated by langium-cli 1.0.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import { AstNode, AbstractAstReflection, Reference, ReferenceInfo, TypeMetaData } from 'langium';

export type Asset = Composer | ExecutableAsset;

export const Asset = 'Asset';

export function isAsset(item: unknown): item is Asset {
    return reflection.isInstance(item, Asset);
}

export type BaseSnippet = AssetReuse | InputRef | TextLiteral | Trait;

export const BaseSnippet = 'BaseSnippet';

export function isBaseSnippet(item: unknown): item is BaseSnippet {
    return reflection.isInstance(item, BaseSnippet);
}

export type CameraAngle = 'aerial view' | 'low angle' | 'over-the-shoulder shot' | 'overhead view' | 'tilted frame';

export type CameraSettings = string;

export type Dimension = 'count' | 'depth' | 'duration' | 'height' | 'length' | 'width';

export type Effects = 'blur' | 'distortion' | 'reflection';

export type ExecutableAsset = Chain | Prompt;

export const ExecutableAsset = 'ExecutableAsset';

export function isExecutableAsset(item: unknown): item is ExecutableAsset {
    return reflection.isInstance(item, ExecutableAsset);
}

export type FileId = string;

export type ImageTrait = CameraAngleTrait | CameraSettingsTrait | EffectsTrait | LightingTrait | MediumTrait | ProximityTrait;

export const ImageTrait = 'ImageTrait';

export function isImageTrait(item: unknown): item is ImageTrait {
    return reflection.isInstance(item, ImageTrait);
}

export type Input = Multimodal | Parameter;

export const Input = 'Input';

export function isInput(item: unknown): item is Input {
    return reflection.isInstance(item, Input);
}

export type InputRef = MultimodalRef | ParameterRef;

export const InputRef = 'InputRef';

export function isInputRef(item: unknown): item is InputRef {
    return reflection.isInstance(item, InputRef);
}

export type LanguageRegister = 'bench-level' | 'dialect' | 'facetious' | 'formal' | 'in-house' | 'ironic' | 'neutral' | 'slang' | 'taboo' | 'technical' | 'vulgar';

export type Lighting = 'accent' | 'ambient' | 'atmospheric' | 'back' | 'dark shadows' | 'diffuse' | 'neon' | 'volumetric';

export type LiteraryStyle = 'advertisement' | 'definition' | 'essay' | 'headline' | 'interview' | 'joke' | 'letter' | 'play' | 'poem' | 'proof' | 'report' | 'song' | 'source code' | 'tale';

export type Media = '3dobject' | 'audio' | 'image' | 'text' | 'video';

export type Medium = '3D art' | 'comic book art' | 'digital art' | 'drawing' | 'painting' | 'photography' | 'portrait';

export type MediumIndependentTrait = AudienceTrait | ByAuthorTrait | IncludesTrait | RelativeTrait | SimilarToTrait | TargetSizeTrait;

export const MediumIndependentTrait = 'MediumIndependentTrait';

export function isMediumIndependentTrait(item: unknown): item is MediumIndependentTrait {
    return reflection.isInstance(item, MediumIndependentTrait);
}

export type ParamId = string;

export type PointOfView = 'first person' | 'second person' | 'third person';

export type Proximity = 'close-up' | 'extreme close-up' | 'extreme long shot' | 'long shot' | 'medium shot';

export type QualifiedName = string;

export type RelativeTrait = AlternativeTrait | CombinationTrait | NegativeTrait;

export const RelativeTrait = 'RelativeTrait';

export function isRelativeTrait(item: unknown): item is RelativeTrait {
    return reflection.isInstance(item, RelativeTrait);
}

export type Relevance = 'high' | 'low' | 'max' | 'medium' | 'min';

export type SizeConstraint = 'different from' | 'exactly' | 'less or equal than' | 'less than' | 'more or equal than' | 'more than';

export type TextTrait = LanguageRegisterTrait | LiteraryStyleTrait | PointOfViewTrait;

export const TextTrait = 'TextTrait';

export function isTextTrait(item: unknown): item is TextTrait {
    return reflection.isInstance(item, TextTrait);
}

export type Trait = ImageTrait | MediumIndependentTrait | TextTrait;

export const Trait = 'Trait';

export function isTrait(item: unknown): item is Trait {
    return reflection.isInstance(item, Trait);
}

export type Unit = 'character' | 'frame' | 'hour' | 'line' | 'minute' | 'page' | 'paragraph' | 'pixel' | 'point' | 'second' | 'sentence' | 'word';

export interface AlternativeTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'AlternativeTrait';
    content: Array<Snippet>
    contents: Array<Snippet>
    validator?: '[reinforced]'
}

export const AlternativeTrait = 'AlternativeTrait';

export function isAlternativeTrait(item: unknown): item is AlternativeTrait {
    return reflection.isInstance(item, AlternativeTrait);
}

export interface AssetReuse extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'AssetReuse';
    asset: Reference<Asset>
    pars?: ParamInvokation
}

export const AssetReuse = 'AssetReuse';

export function isAssetReuse(item: unknown): item is AssetReuse {
    return reflection.isInstance(item, AssetReuse);
}

export interface AudienceTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'AudienceTrait';
    content: Snippet
    validator?: '[reinforced]'
}

export const AudienceTrait = 'AudienceTrait';

export function isAudienceTrait(item: unknown): item is AudienceTrait {
    return reflection.isInstance(item, AudienceTrait);
}

export interface ByAuthorTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'ByAuthorTrait';
    validator?: '[reinforced]'
    value: Snippet
}

export const ByAuthorTrait = 'ByAuthorTrait';

export function isByAuthorTrait(item: unknown): item is ByAuthorTrait {
    return reflection.isInstance(item, ByAuthorTrait);
}

export interface CameraAngleTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'CameraAngleTrait';
    validator?: '[reinforced]'
    value: CameraAngle
}

export const CameraAngleTrait = 'CameraAngleTrait';

export function isCameraAngleTrait(item: unknown): item is CameraAngleTrait {
    return reflection.isInstance(item, CameraAngleTrait);
}

export interface CameraSettingsTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'CameraSettingsTrait';
    validator?: '[reinforced]'
    value: CameraSettings
}

export const CameraSettingsTrait = 'CameraSettingsTrait';

export function isCameraSettingsTrait(item: unknown): item is CameraSettingsTrait {
    return reflection.isInstance(item, CameraSettingsTrait);
}

export interface Chain extends AstNode {
    readonly $container: Model;
    readonly $type: 'ByExpressionOutputTesting' | 'Chain';
    name: QualifiedName
    priorVersion: Reference<Asset>
}

export const Chain = 'Chain';

export function isChain(item: unknown): item is Chain {
    return reflection.isInstance(item, Chain);
}

export interface CombinationTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'CombinationTrait';
    contents: Array<Snippet>
    validator?: '[reinforced]'
}

export const CombinationTrait = 'CombinationTrait';

export function isCombinationTrait(item: unknown): item is CombinationTrait {
    return reflection.isInstance(item, CombinationTrait);
}

export interface Composer extends AstNode {
    readonly $container: Model;
    readonly $type: 'Composer';
    contents: Contents
    language: Reference<Language>
    name: QualifiedName
    pars: Parameters
    priorVersion: Reference<Asset>
}

export const Composer = 'Composer';

export function isComposer(item: unknown): item is Composer {
    return reflection.isInstance(item, Composer);
}

export interface Contents extends AstNode {
    readonly $container: Composer;
    readonly $type: 'Contents';
    snippets: Array<Snippet>
}

export const Contents = 'Contents';

export function isContents(item: unknown): item is Contents {
    return reflection.isInstance(item, Contents);
}

export interface Core extends AstNode {
    readonly $container: Prompt;
    readonly $type: 'Core';
    name: 'core'
    snippets: Array<Snippet>
}

export const Core = 'Core';

export function isCore(item: unknown): item is Core {
    return reflection.isInstance(item, Core);
}

export interface EffectsTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'EffectsTrait';
    validator?: '[reinforced]'
    value: Effects
}

export const EffectsTrait = 'EffectsTrait';

export function isEffectsTrait(item: unknown): item is EffectsTrait {
    return reflection.isInstance(item, EffectsTrait);
}

export interface Equivalency extends AstNode {
    readonly $container: Model;
    readonly $type: 'Equivalency';
    assets: Array<Reference<Asset>>
}

export const Equivalency = 'Equivalency';

export function isEquivalency(item: unknown): item is Equivalency {
    return reflection.isInstance(item, Equivalency);
}

export interface HyperParam extends AstNode {
    readonly $container: HyperParameters;
    readonly $type: 'HyperParam';
    name: string
    value: string
}

export const HyperParam = 'HyperParam';

export function isHyperParam(item: unknown): item is HyperParam {
    return reflection.isInstance(item, HyperParam);
}

export interface HyperParameters extends AstNode {
    readonly $container: Prompt;
    readonly $type: 'HyperParameters';
    hyper: Array<HyperParam>
}

export const HyperParameters = 'HyperParameters';

export function isHyperParameters(item: unknown): item is HyperParameters {
    return reflection.isInstance(item, HyperParameters);
}

export interface IncludesTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'IncludesTrait';
    contents: Array<Snippet>
    times?: number
    validator?: '[reinforced]'
}

export const IncludesTrait = 'IncludesTrait';

export function isIncludesTrait(item: unknown): item is IncludesTrait {
    return reflection.isInstance(item, IncludesTrait);
}

export interface Language extends AstNode {
    readonly $container: Model;
    readonly $type: 'Language';
    code: string
    name: string
    region: string
}

export const Language = 'Language';

export function isLanguage(item: unknown): item is Language {
    return reflection.isInstance(item, Language);
}

export interface LanguageRegisterTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'LanguageRegisterTrait';
    validator?: '[reinforced]'
    value: LanguageRegister
}

export const LanguageRegisterTrait = 'LanguageRegisterTrait';

export function isLanguageRegisterTrait(item: unknown): item is LanguageRegisterTrait {
    return reflection.isInstance(item, LanguageRegisterTrait);
}

export interface LightingTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'LightingTrait';
    validator?: '[reinforced]'
    value: Lighting
}

export const LightingTrait = 'LightingTrait';

export function isLightingTrait(item: unknown): item is LightingTrait {
    return reflection.isInstance(item, LightingTrait);
}

export interface LiteraryStyleTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'LiteraryStyleTrait';
    validator?: '[reinforced]'
    value: LiteraryStyle
}

export const LiteraryStyleTrait = 'LiteraryStyleTrait';

export function isLiteraryStyleTrait(item: unknown): item is LiteraryStyleTrait {
    return reflection.isInstance(item, LiteraryStyleTrait);
}

export interface MediumTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'MediumTrait';
    validator?: '[reinforced]'
    value: Medium
}

export const MediumTrait = 'MediumTrait';

export function isMediumTrait(item: unknown): item is MediumTrait {
    return reflection.isInstance(item, MediumTrait);
}

export interface Model extends AstNode {
    readonly $type: 'Model';
    assets: Array<Asset>
    equivalencies?: Equivalency
    languages: Array<Language>
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface Multimodal extends AstNode {
    readonly $container: Parameters;
    readonly $type: 'Multimodal';
    description?: string
    format: Media
    name: FileId
    weight?: Weight
}

export const Multimodal = 'Multimodal';

export function isMultimodal(item: unknown): item is Multimodal {
    return reflection.isInstance(item, Multimodal);
}

export interface MultimodalRef extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'MultimodalRef';
    param: Reference<Multimodal>
}

export const MultimodalRef = 'MultimodalRef';

export function isMultimodalRef(item: unknown): item is MultimodalRef {
    return reflection.isInstance(item, MultimodalRef);
}

export interface NegativeTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'NegativeTrait';
    content: Snippet
    validator?: '[reinforced]'
}

export const NegativeTrait = 'NegativeTrait';

export function isNegativeTrait(item: unknown): item is NegativeTrait {
    return reflection.isInstance(item, NegativeTrait);
}

export interface Parameter extends AstNode {
    readonly $container: Parameters;
    readonly $type: 'Parameter';
    description?: string
    name: ParamId
}

export const Parameter = 'Parameter';

export function isParameter(item: unknown): item is Parameter {
    return reflection.isInstance(item, Parameter);
}

export interface ParameterRef extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'ParameterRef';
    param: Reference<Parameter>
}

export const ParameterRef = 'ParameterRef';

export function isParameterRef(item: unknown): item is ParameterRef {
    return reflection.isInstance(item, ParameterRef);
}

export interface Parameters extends AstNode {
    readonly $container: Composer | Prompt;
    readonly $type: 'Parameters';
    pars: Array<Input>
}

export const Parameters = 'Parameters';

export function isParameters(item: unknown): item is Parameters {
    return reflection.isInstance(item, Parameters);
}

export interface ParamInvokation extends AstNode {
    readonly $container: AssetReuse;
    readonly $type: 'ParamInvokation';
    pars: Array<Snippet>
}

export const ParamInvokation = 'ParamInvokation';

export function isParamInvokation(item: unknown): item is ParamInvokation {
    return reflection.isInstance(item, ParamInvokation);
}

export interface PointOfViewTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'PointOfViewTrait';
    validator?: '[reinforced]'
    value: PointOfView
}

export const PointOfViewTrait = 'PointOfViewTrait';

export function isPointOfViewTrait(item: unknown): item is PointOfViewTrait {
    return reflection.isInstance(item, PointOfViewTrait);
}

export interface Prefix extends AstNode {
    readonly $container: Prompt;
    readonly $type: 'Prefix';
    name: 'prefix'
    snippets: Array<Snippet>
}

export const Prefix = 'Prefix';

export function isPrefix(item: unknown): item is Prefix {
    return reflection.isInstance(item, Prefix);
}

export interface Prompt extends AstNode {
    readonly $container: Model;
    readonly $type: 'ByExpressionOutputTesting' | 'Prompt';
    core: Core
    description?: string
    hyper?: HyperParameters
    language: Reference<Language>
    name: QualifiedName
    output: Media
    outputDesc?: string
    pars: Parameters
    prefix?: Prefix
    priorVersion: Reference<Asset>
    suffix?: Suffix
}

export const Prompt = 'Prompt';

export function isPrompt(item: unknown): item is Prompt {
    return reflection.isInstance(item, Prompt);
}

export interface ProximityTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'ProximityTrait';
    validator?: '[reinforced]'
    value: Proximity
}

export const ProximityTrait = 'ProximityTrait';

export function isProximityTrait(item: unknown): item is ProximityTrait {
    return reflection.isInstance(item, ProximityTrait);
}

export interface SimilarToTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'SimilarToTrait';
    contents: Array<Snippet>
    validator?: '[reinforced]'
}

export const SimilarToTrait = 'SimilarToTrait';

export function isSimilarToTrait(item: unknown): item is SimilarToTrait {
    return reflection.isInstance(item, SimilarToTrait);
}

export interface Snippet extends AstNode {
    readonly $container: AlternativeTrait | AudienceTrait | ByAuthorTrait | CombinationTrait | Contents | Core | IncludesTrait | NegativeTrait | ParamInvokation | Prefix | SimilarToTrait | Suffix;
    readonly $type: 'Snippet';
    content: BaseSnippet
    weight?: Weight
}

export const Snippet = 'Snippet';

export function isSnippet(item: unknown): item is Snippet {
    return reflection.isInstance(item, Snippet);
}

export interface Suffix extends AstNode {
    readonly $container: Prompt;
    readonly $type: 'Suffix';
    name: 'suffix'
    snippets: Array<Snippet>
}

export const Suffix = 'Suffix';

export function isSuffix(item: unknown): item is Suffix {
    return reflection.isInstance(item, Suffix);
}

export interface TargetSizeTrait extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'TargetSizeTrait';
    amount: number
    dimension: Dimension
    type: SizeConstraint
    unit: Unit
    validator?: '[reinforced]'
}

export const TargetSizeTrait = 'TargetSizeTrait';

export function isTargetSizeTrait(item: unknown): item is TargetSizeTrait {
    return reflection.isInstance(item, TargetSizeTrait);
}

export interface TextLiteral extends AstNode {
    readonly $container: Snippet;
    readonly $type: 'TextLiteral';
    content: string
}

export const TextLiteral = 'TextLiteral';

export function isTextLiteral(item: unknown): item is TextLiteral {
    return reflection.isInstance(item, TextLiteral);
}

export interface Weight extends AstNode {
    readonly $container: Multimodal | Snippet;
    readonly $type: 'Weight';
    relevance: Relevance
}

export const Weight = 'Weight';

export function isWeight(item: unknown): item is Weight {
    return reflection.isInstance(item, Weight);
}

export interface ByExpressionOutputTesting extends Chain, Prompt {
    readonly $container: Model;
    readonly $type: 'ByExpressionOutputTesting';
    validator: Reference<ExecutableAsset>
}

export const ByExpressionOutputTesting = 'ByExpressionOutputTesting';

export function isByExpressionOutputTesting(item: unknown): item is ByExpressionOutputTesting {
    return reflection.isInstance(item, ByExpressionOutputTesting);
}

export interface ImpromptuAstType {
    AlternativeTrait: AlternativeTrait
    Asset: Asset
    AssetReuse: AssetReuse
    AudienceTrait: AudienceTrait
    BaseSnippet: BaseSnippet
    ByAuthorTrait: ByAuthorTrait
    ByExpressionOutputTesting: ByExpressionOutputTesting
    CameraAngleTrait: CameraAngleTrait
    CameraSettingsTrait: CameraSettingsTrait
    Chain: Chain
    CombinationTrait: CombinationTrait
    Composer: Composer
    Contents: Contents
    Core: Core
    EffectsTrait: EffectsTrait
    Equivalency: Equivalency
    ExecutableAsset: ExecutableAsset
    HyperParam: HyperParam
    HyperParameters: HyperParameters
    ImageTrait: ImageTrait
    IncludesTrait: IncludesTrait
    Input: Input
    InputRef: InputRef
    Language: Language
    LanguageRegisterTrait: LanguageRegisterTrait
    LightingTrait: LightingTrait
    LiteraryStyleTrait: LiteraryStyleTrait
    MediumIndependentTrait: MediumIndependentTrait
    MediumTrait: MediumTrait
    Model: Model
    Multimodal: Multimodal
    MultimodalRef: MultimodalRef
    NegativeTrait: NegativeTrait
    ParamInvokation: ParamInvokation
    Parameter: Parameter
    ParameterRef: ParameterRef
    Parameters: Parameters
    PointOfViewTrait: PointOfViewTrait
    Prefix: Prefix
    Prompt: Prompt
    ProximityTrait: ProximityTrait
    RelativeTrait: RelativeTrait
    SimilarToTrait: SimilarToTrait
    Snippet: Snippet
    Suffix: Suffix
    TargetSizeTrait: TargetSizeTrait
    TextLiteral: TextLiteral
    TextTrait: TextTrait
    Trait: Trait
    Weight: Weight
}

export class ImpromptuAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['AlternativeTrait', 'Asset', 'AssetReuse', 'AudienceTrait', 'BaseSnippet', 'ByAuthorTrait', 'ByExpressionOutputTesting', 'CameraAngleTrait', 'CameraSettingsTrait', 'Chain', 'CombinationTrait', 'Composer', 'Contents', 'Core', 'EffectsTrait', 'Equivalency', 'ExecutableAsset', 'HyperParam', 'HyperParameters', 'ImageTrait', 'IncludesTrait', 'Input', 'InputRef', 'Language', 'LanguageRegisterTrait', 'LightingTrait', 'LiteraryStyleTrait', 'MediumIndependentTrait', 'MediumTrait', 'Model', 'Multimodal', 'MultimodalRef', 'NegativeTrait', 'ParamInvokation', 'Parameter', 'ParameterRef', 'Parameters', 'PointOfViewTrait', 'Prefix', 'Prompt', 'ProximityTrait', 'RelativeTrait', 'SimilarToTrait', 'Snippet', 'Suffix', 'TargetSizeTrait', 'TextLiteral', 'TextTrait', 'Trait', 'Weight'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case AlternativeTrait:
            case CombinationTrait:
            case NegativeTrait: {
                return this.isSubtype(RelativeTrait, supertype);
            }
            case AssetReuse:
            case TextLiteral:
            case InputRef:
            case Trait: {
                return this.isSubtype(BaseSnippet, supertype);
            }
            case AudienceTrait:
            case ByAuthorTrait:
            case IncludesTrait:
            case SimilarToTrait:
            case TargetSizeTrait:
            case RelativeTrait: {
                return this.isSubtype(MediumIndependentTrait, supertype);
            }
            case CameraAngleTrait:
            case CameraSettingsTrait:
            case EffectsTrait:
            case LightingTrait:
            case MediumTrait:
            case ProximityTrait: {
                return this.isSubtype(ImageTrait, supertype);
            }
            case Chain:
            case Prompt: {
                return this.isSubtype(ExecutableAsset, supertype);
            }
            case Composer:
            case ExecutableAsset: {
                return this.isSubtype(Asset, supertype);
            }
            case LanguageRegisterTrait:
            case LiteraryStyleTrait:
            case PointOfViewTrait: {
                return this.isSubtype(TextTrait, supertype);
            }
            case Multimodal:
            case Parameter: {
                return this.isSubtype(Input, supertype);
            }
            case MultimodalRef:
            case ParameterRef: {
                return this.isSubtype(InputRef, supertype);
            }
            case ByExpressionOutputTesting: {
                return this.isSubtype(Prompt, supertype) || this.isSubtype(Chain, supertype);
            }
            case ImageTrait:
            case MediumIndependentTrait:
            case TextTrait: {
                return this.isSubtype(Trait, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'AssetReuse:asset':
            case 'ByExpressionOutputTesting:priorVersion':
            case 'ByExpressionOutputTesting:priorVersion':
            case 'Chain:priorVersion':
            case 'Composer:priorVersion':
            case 'Equivalency:assets':
            case 'Prompt:priorVersion': {
                return Asset;
            }
            case 'ByExpressionOutputTesting:validator': {
                return ExecutableAsset;
            }
            case 'ByExpressionOutputTesting:language':
            case 'Composer:language':
            case 'Prompt:language': {
                return Language;
            }
            case 'MultimodalRef:param': {
                return Multimodal;
            }
            case 'ParameterRef:param': {
                return Parameter;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'AlternativeTrait': {
                return {
                    name: 'AlternativeTrait',
                    mandatory: [
                        { name: 'content', type: 'array' },
                        { name: 'contents', type: 'array' }
                    ]
                };
            }
            case 'CombinationTrait': {
                return {
                    name: 'CombinationTrait',
                    mandatory: [
                        { name: 'contents', type: 'array' }
                    ]
                };
            }
            case 'Contents': {
                return {
                    name: 'Contents',
                    mandatory: [
                        { name: 'snippets', type: 'array' }
                    ]
                };
            }
            case 'Core': {
                return {
                    name: 'Core',
                    mandatory: [
                        { name: 'snippets', type: 'array' }
                    ]
                };
            }
            case 'Equivalency': {
                return {
                    name: 'Equivalency',
                    mandatory: [
                        { name: 'assets', type: 'array' }
                    ]
                };
            }
            case 'HyperParameters': {
                return {
                    name: 'HyperParameters',
                    mandatory: [
                        { name: 'hyper', type: 'array' }
                    ]
                };
            }
            case 'IncludesTrait': {
                return {
                    name: 'IncludesTrait',
                    mandatory: [
                        { name: 'contents', type: 'array' }
                    ]
                };
            }
            case 'Model': {
                return {
                    name: 'Model',
                    mandatory: [
                        { name: 'assets', type: 'array' },
                        { name: 'languages', type: 'array' }
                    ]
                };
            }
            case 'Parameters': {
                return {
                    name: 'Parameters',
                    mandatory: [
                        { name: 'pars', type: 'array' }
                    ]
                };
            }
            case 'ParamInvokation': {
                return {
                    name: 'ParamInvokation',
                    mandatory: [
                        { name: 'pars', type: 'array' }
                    ]
                };
            }
            case 'Prefix': {
                return {
                    name: 'Prefix',
                    mandatory: [
                        { name: 'snippets', type: 'array' }
                    ]
                };
            }
            case 'SimilarToTrait': {
                return {
                    name: 'SimilarToTrait',
                    mandatory: [
                        { name: 'contents', type: 'array' }
                    ]
                };
            }
            case 'Suffix': {
                return {
                    name: 'Suffix',
                    mandatory: [
                        { name: 'snippets', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new ImpromptuAstReflection();
