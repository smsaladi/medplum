/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Device } from './Device';
import { DeviceMetric } from './DeviceMetric';
import { Expression } from './Expression';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

/**
 * The EvidenceVariable resource describes an element that knowledge
 * (Evidence) is about.
 */
export interface EvidenceVariable {

  /**
   * This is a EvidenceVariable resource
   */
  readonly resourceType: 'EvidenceVariable';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * An absolute URI that is used to identify this evidence variable when
   * it is referenced in a specification, model, design or an instance;
   * also called its canonical identifier. This SHOULD be globally unique
   * and SHOULD be a literal address at which at which an authoritative
   * instance of this evidence variable is (or will be) published. This URL
   * can be the target of a canonical reference. It SHALL remain the same
   * when the evidence variable is stored on different servers.
   */
  url?: string;

  /**
   * A formal identifier that is used to identify this evidence variable
   * when it is represented in other formats, or referenced in a
   * specification, model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the evidence
   * variable when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the evidence variable
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence. To provide a version consistent with the
   * Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active artifacts.
   */
  version?: string;

  /**
   * A natural language name identifying the evidence variable. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the evidence variable.
   */
  title?: string;

  /**
   * The short title provides an alternate title for use in informal
   * descriptive contexts where the full, formal title is not necessary.
   */
  shortTitle?: string;

  /**
   * An explanatory or alternate title for the EvidenceVariable giving
   * additional information about its content.
   */
  subtitle?: string;

  /**
   * The status of this evidence variable. Enables tracking the life-cycle
   * of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The date  (and optionally time) when the evidence variable was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the evidence variable changes.
   */
  date?: string;

  /**
   * A free text natural language description of the evidence variable from
   * a consumer's perspective.
   */
  description?: string;

  /**
   * A human-readable string to clarify or explain concepts about the
   * resource.
   */
  note?: Annotation[];

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate evidence variable instances.
   */
  useContext?: UsageContext[];

  /**
   * The name of the organization or individual that published the evidence
   * variable.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * An individiual or organization primarily involved in the creation and
   * maintenance of the content.
   */
  author?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for internal
   * coherence of the content.
   */
  editor?: ContactDetail[];

  /**
   * An individual or organization primarily responsible for review of some
   * aspect of the content.
   */
  reviewer?: ContactDetail[];

  /**
   * An individual or organization responsible for officially endorsing the
   * content for use in some setting.
   */
  endorser?: ContactDetail[];

  /**
   * Related artifacts such as additional documentation, justification, or
   * bibliographic references.
   */
  relatedArtifact?: RelatedArtifact[];

  /**
   * True if the actual variable measured, false if a conceptual
   * representation of the intended variable.
   */
  actual?: boolean;

  /**
   * Used to specify if two or more characteristics are combined with OR or
   * AND.
   */
  characteristicCombination?: 'intersection' | 'union';

  /**
   * A characteristic that defines the members of the evidence element.
   * Multiple characteristics are applied with &quot;and&quot; semantics.
   */
  characteristic?: EvidenceVariableCharacteristic[];

  /**
   * Used for an outcome to classify.
   */
  handling?: 'continuous' | 'dichotomous' | 'ordinal' | 'polychotomous';

  /**
   * A grouping (or set of values) described along with other groupings to
   * specify the set of groupings allowed for the variable.
   */
  category?: EvidenceVariableCategory[];
}

/**
 * A grouping (or set of values) described along with other groupings to
 * specify the set of groupings allowed for the variable.
 */
export interface EvidenceVariableCategory {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A human-readable title or representation of the grouping.
   */
  name?: string;

  /**
   * Value or set of values that define the grouping.
   */
  valueCodeableConcept?: CodeableConcept;

  /**
   * Value or set of values that define the grouping.
   */
  valueQuantity?: Quantity;

  /**
   * Value or set of values that define the grouping.
   */
  valueRange?: Range;
}

/**
 * A characteristic that defines the members of the evidence element.
 * Multiple characteristics are applied with &quot;and&quot; semantics.
 */
export interface EvidenceVariableCharacteristic {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A short, natural language description of the characteristic that could
   * be used to communicate the criteria to an end-user.
   */
  description?: string;

  /**
   * Define members of the evidence element using Codes (such as condition,
   * medication, or observation), Expressions ( using an expression
   * language such as FHIRPath or CQL) or DataRequirements (such as
   * Diabetes diagnosis onset in the last year).
   */
  definitionReference?: Reference<Group | EvidenceVariable>;

  /**
   * Define members of the evidence element using Codes (such as condition,
   * medication, or observation), Expressions ( using an expression
   * language such as FHIRPath or CQL) or DataRequirements (such as
   * Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string;

  /**
   * Define members of the evidence element using Codes (such as condition,
   * medication, or observation), Expressions ( using an expression
   * language such as FHIRPath or CQL) or DataRequirements (such as
   * Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: CodeableConcept;

  /**
   * Define members of the evidence element using Codes (such as condition,
   * medication, or observation), Expressions ( using an expression
   * language such as FHIRPath or CQL) or DataRequirements (such as
   * Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: Expression;

  /**
   * Method used for describing characteristic.
   */
  method?: CodeableConcept;

  /**
   * Device used for determining characteristic.
   */
  device?: Reference<Device | DeviceMetric>;

  /**
   * When true, members with this characteristic are excluded from the
   * element.
   */
  exclude?: boolean;

  /**
   * Indicates duration, period, or point of observation from the
   * participant's study entry.
   */
  timeFromStart?: EvidenceVariableCharacteristicTimeFromStart;

  /**
   * Indicates how elements are aggregated within the study effective
   * period.
   */
  groupMeasure?: 'mean' | 'median' | 'mean-of-mean' | 'mean-of-median' | 'median-of-mean' | 'median-of-median';
}

/**
 * Indicates duration, period, or point of observation from the
 * participant's study entry.
 */
export interface EvidenceVariableCharacteristicTimeFromStart {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A short, natural language description.
   */
  description?: string;

  /**
   * Used to express the observation at a defined amount of time after the
   * study start.
   */
  quantity?: Quantity;

  /**
   * Used to express the observation within a period after the study start.
   */
  range?: Range;

  /**
   * A human-readable string to clarify or explain concepts about the
   * resource.
   */
  note?: Annotation[];
}
