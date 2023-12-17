/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

/**
 * Describes a stream of resource state changes identified by trigger
 * criteria and annotated with labels useful to filter projections from
 * this topic.
 */
export interface SubscriptionTopic {

  /**
   * This is a SubscriptionTopic resource
   */
  readonly resourceType: 'SubscriptionTopic';

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
   * An absolute URI that is used to identify this subscription topic when
   * it is referenced in a specification, model, design or an instance;
   * also called its canonical identifier. This SHOULD be globally unique
   * and SHOULD be a literal address at which at which an authoritative
   * instance of this subscription topic is (or will be) published. This
   * URL can be the target of a canonical reference. It SHALL remain the
   * same when the subscription topic is stored on different servers.
   */
  url: string;

  /**
   * Business identifiers assigned to this subscription topic by the
   * performer and/or other systems.  These identifiers remain constant as
   * the resource is updated and propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the
   * subscription topic when it is referenced in a specification, model,
   * design or instance. This is an arbitrary value managed by the Topic
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions are orderable.
   */
  version?: string;

  /**
   * A short, descriptive, user-friendly title for the SubscriptionTopic,
   * for example, &quot;admission&quot;.
   */
  title?: string;

  /**
   * The canonical URL pointing to another FHIR-defined SubscriptionTopic
   * that is adhered to in whole or in part by this SubscriptionTopic.
   */
  derivedFrom?: string[];

  /**
   * The current state of the SubscriptionTopic.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A flag to indicate that this TopSubscriptionTopicic is authored for
   * testing purposes (or education/evaluation/marketing), and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * For draft definitions, indicates the date of initial creation.  For
   * active definitions, represents the date of activation.  For withdrawn
   * definitions, indicates the date of withdrawal.
   */
  date?: string;

  /**
   * Helps establish the &quot;authority/credibility&quot; of the SubscriptionTopic.
   * May also allow for contact.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the Topic from the
   * consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These terms may be used to assist with
   * indexing and searching of code system definitions.
   */
  useContext?: UsageContext[];

  /**
   * A jurisdiction in which the Topic is intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explains why this Topic is needed and why it has been designed as it
   * has.
   */
  purpose?: string;

  /**
   * A copyright statement relating to the SubscriptionTopic and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the SubscriptionTopic.
   */
  copyright?: string;

  /**
   * The date on which the asset content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  approvalDate?: string;

  /**
   * The date on which the asset content was last reviewed. Review happens
   * periodically after that, but doesn't change the original approval
   * date.
   */
  lastReviewDate?: string;

  /**
   * The period during which the SubscriptionTopic content was or is
   * planned to be effective.
   */
  effectivePeriod?: Period;

  /**
   * A definition of a resource-based event that triggers a notification
   * based on the SubscriptionTopic. The criteria may be just a human
   * readable description and/or a full FHIR search string or FHIRPath
   * expression. Multiple triggers are considered OR joined (e.g., a
   * resource update matching ANY of the definitions will trigger a
   * notification).
   */
  resourceTrigger?: SubscriptionTopicResourceTrigger[];

  /**
   * Event definition which can be used to trigger the SubscriptionTopic.
   */
  eventTrigger?: SubscriptionTopicEventTrigger[];

  /**
   * List of properties by which Subscriptions on the SubscriptionTopic can
   * be filtered. May be defined Search Parameters (e.g.,
   * Encounter.patient) or parameters defined within this SubscriptionTopic
   * context (e.g., hub.event).
   */
  canFilterBy?: SubscriptionTopicCanFilterBy[];

  /**
   * List of properties to describe the shape (e.g., resources) included in
   * notifications from this Subscription Topic.
   */
  notificationShape?: SubscriptionTopicNotificationShape[];
}

/**
 * List of properties by which Subscriptions on the SubscriptionTopic can
 * be filtered. May be defined Search Parameters (e.g.,
 * Encounter.patient) or parameters defined within this SubscriptionTopic
 * context (e.g., hub.event).
 */
export interface SubscriptionTopicCanFilterBy {

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
   * Description of how this filtering parameter is intended to be used.
   */
  description?: string;

  /**
   * URL of the Resource that is the type used in this filter. This is the
   * &quot;focus&quot; of the topic (or one of them if there are more than one). It
   * will be the same, a generality, or a specificity of
   * SubscriptionTopic.resourceTrigger.resource or
   * SubscriptionTopic.eventTrigger.resource when they are present.
   */
  resource?: string;

  /**
   * Either the canonical URL to a search parameter (like
   * &quot;http://hl7.org/fhir/SearchParameter/encounter-patient&quot;) or
   * topic-defined parameter (like &quot;hub.event&quot;) which is a label for the
   * filter.
   */
  filterParameter: string;

  /**
   * Either the canonical URL to a search parameter (like
   * &quot;http://hl7.org/fhir/SearchParameter/encounter-patient&quot;) or the
   * officially-defined URI for a shared filter concept (like
   * &quot;http://example.org/concepts/shared-common-event&quot;).
   */
  filterDefinition?: string;

  /**
   * Allowable operators to apply when determining matches (Search
   * Modifiers).  If the filterParameter is a SearchParameter, this list of
   * modifiers SHALL be a strict subset of the modifiers defined on that
   * SearchParameter.
   */
  modifier?: ('=' | 'eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap' | 'above' | 'below' | 'in' | 'not-in' | 'of-type')[];
}

/**
 * Event definition which can be used to trigger the SubscriptionTopic.
 */
export interface SubscriptionTopicEventTrigger {

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
   * The human readable description of an event to trigger a notification
   * for the SubscriptionTopic - for example, &quot;Patient Admission, as
   * defined in HL7v2 via message ADT^A01&quot;. Multiple values are considered
   * OR joined (e.g., matching any single event listed).
   */
  description?: string;

  /**
   * A well-defined event which can be used to trigger notifications from
   * the SubscriptionTopic.
   */
  event: CodeableConcept;

  /**
   * URL of the Resource that is the focus type used in this event trigger.
   * Relative URLs are relative to the StructureDefinition root of the
   * implemented FHIR version (e.g.,
   * http://hl7.org/fhir/StructureDefinition). For example, &quot;Patient&quot; maps
   * to http://hl7.org/fhir/StructureDefinition/Patient.  For more
   * information, see &lt;a
   * href=&quot;elementdefinition-definitions.html#ElementDefinition.type.code&quot;&gt;ElementDefinition.type.code&lt;/a&gt;.
   */
  resource: string;
}

/**
 * List of properties to describe the shape (e.g., resources) included in
 * notifications from this Subscription Topic.
 */
export interface SubscriptionTopicNotificationShape {

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
   * URL of the Resource that is the type used in this shape. This is the
   * &quot;focus&quot; of the topic (or one of them if there are more than one) and
   * the root resource for this shape definition. It will be the same, a
   * generality, or a specificity of
   * SubscriptionTopic.resourceTrigger.resource or
   * SubscriptionTopic.eventTrigger.resource when they are present.
   */
  resource: string;

  /**
   * Search-style _include directives, rooted in the resource for this
   * shape. Servers SHOULD include resources listed here, if they exist and
   * the user is authorized to receive them.  Clients SHOULD be prepared to
   * receive these additional resources, but SHALL function properly
   * without them.
   */
  include?: string[];

  /**
   * Search-style _revinclude directives, rooted in the resource for this
   * shape. Servers SHOULD include resources listed here, if they exist and
   * the user is authorized to receive them.  Clients SHOULD be prepared to
   * receive these additional resources, but SHALL function properly
   * without them.
   */
  revInclude?: string[];
}

/**
 * A definition of a resource-based event that triggers a notification
 * based on the SubscriptionTopic. The criteria may be just a human
 * readable description and/or a full FHIR search string or FHIRPath
 * expression. Multiple triggers are considered OR joined (e.g., a
 * resource update matching ANY of the definitions will trigger a
 * notification).
 */
export interface SubscriptionTopicResourceTrigger {

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
   * The human readable description of this resource trigger for the
   * SubscriptionTopic -  for example, &quot;An Encounter enters the
   * 'in-progress' state&quot;.
   */
  description?: string;

  /**
   * URL of the Resource that is the type used in this resource trigger.
   * Relative URLs are relative to the StructureDefinition root of the
   * implemented FHIR version (e.g.,
   * http://hl7.org/fhir/StructureDefinition). For example, &quot;Patient&quot; maps
   * to http://hl7.org/fhir/StructureDefinition/Patient.  For more
   * information, see &lt;a
   * href=&quot;elementdefinition-definitions.html#ElementDefinition.type.code&quot;&gt;ElementDefinition.type.code&lt;/a&gt;.
   */
  resource: string;

  /**
   * The FHIR RESTful interaction which can be used to trigger a
   * notification for the SubscriptionTopic. Multiple values are considered
   * OR joined (e.g., CREATE or UPDATE).
   */
  supportedInteraction?: ('create' | 'update' | 'delete')[];

  /**
   * The FHIR query based rules that the server should use to determine
   * when to trigger a notification for this subscription topic.
   */
  queryCriteria?: SubscriptionTopicResourceTriggerQueryCriteria;

  /**
   * The FHIRPath based rules that the server should use to determine when
   * to trigger a notification for this topic.
   */
  fhirPathCriteria?: string;
}

/**
 * The FHIR query based rules that the server should use to determine
 * when to trigger a notification for this subscription topic.
 */
export interface SubscriptionTopicResourceTriggerQueryCriteria {

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
   * The FHIR query based rules are applied to the previous resource state
   * (e.g., state before an update).
   */
  previous?: string;

  /**
   * For &quot;create&quot; interactions, should the &quot;previous&quot; criteria count as an
   * automatic pass or an automatic fail.
   */
  resultForCreate?: 'test-passes' | 'test-fails';

  /**
   * The FHIR query based rules are applied to the current resource state
   * (e.g., state after an update).
   */
  current?: string;

  /**
   * For &quot;delete&quot; interactions, should the &quot;current&quot; criteria count as an
   * automatic pass or an automatic fail.
   */
  resultForDelete?: 'test-passes' | 'test-fails';

  /**
   * If set to true, both current and previous criteria must evaluate true
   * to  trigger a notification for this topic.  Otherwise a notification
   * for this topic will be triggered if either one evaluates to true.
   */
  requireBoth?: boolean;
}
