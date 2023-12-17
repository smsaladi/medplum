/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { Citation } from './Citation';
import { CodeableConcept } from './CodeableConcept';
import { DocumentReference } from './DocumentReference';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * The detailed description of a substance, typically at a level beyond
 * what is used for prescribing.
 */
export interface SubstanceDefinition {

  /**
   * This is a SubstanceDefinition resource
   */
  readonly resourceType: 'SubstanceDefinition';

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
   * Identifier by which this substance is known.
   */
  identifier?: Identifier[];

  /**
   * A business level version identifier of the substance.
   */
  version?: string;

  /**
   * Status of substance within the catalogue e.g. active, retired.
   */
  status?: CodeableConcept;

  /**
   * A high level categorization, e.g. polymer or nucleic acid, or food,
   * chemical, biological, or a lower level such as the general types of
   * polymer (linear or branch chain) or type of impurity (process related
   * or contaminant).
   */
  classification?: CodeableConcept[];

  /**
   * If the substance applies to human or veterinary use.
   */
  domain?: CodeableConcept;

  /**
   * The quality standard, established benchmark, to which substance
   * complies (e.g. USP/NF, Ph. Eur, JP, BP, Company Standard).
   */
  grade?: CodeableConcept[];

  /**
   * Textual description of the substance.
   */
  description?: string;

  /**
   * Supporting literature.
   */
  informationSource?: Reference<Citation>[];

  /**
   * Textual comment about the substance's catalogue or registry record.
   */
  note?: Annotation[];

  /**
   * The entity that creates, makes, produces or fabricates the substance.
   * This is a set of potential manufacturers but is not necessarily
   * comprehensive.
   */
  manufacturer?: Reference<Organization>[];

  /**
   * An entity that is the source for the substance. It may be different
   * from the manufacturer. Supplier is synonymous to a distributor.
   */
  supplier?: Reference<Organization>[];

  /**
   * Moiety, for structural modifications.
   */
  moiety?: SubstanceDefinitionMoiety[];

  /**
   * General specifications for this substance.
   */
  property?: SubstanceDefinitionProperty[];

  /**
   * The molecular weight or weight range (for proteins, polymers or
   * nucleic acids).
   */
  molecularWeight?: SubstanceDefinitionMolecularWeight[];

  /**
   * Structural information.
   */
  structure?: SubstanceDefinitionStructure;

  /**
   * Codes associated with the substance.
   */
  code?: SubstanceDefinitionCode[];

  /**
   * Names applicable to this substance.
   */
  name?: SubstanceDefinitionName[];

  /**
   * A link between this substance and another, with details of the
   * relationship.
   */
  relationship?: SubstanceDefinitionRelationship[];

  /**
   * Material or taxonomic/anatomical source for the substance.
   */
  sourceMaterial?: SubstanceDefinitionSourceMaterial;
}

/**
 * Codes associated with the substance.
 */
export interface SubstanceDefinitionCode {

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
   * The specific code.
   */
  code?: CodeableConcept;

  /**
   * Status of the code assignment, for example 'provisional', 'approved'.
   */
  status?: CodeableConcept;

  /**
   * The date at which the code status was changed as part of the
   * terminology maintenance.
   */
  statusDate?: string;

  /**
   * Any comment can be provided in this field, if necessary.
   */
  note?: Annotation[];

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];
}

/**
 * Moiety, for structural modifications.
 */
export interface SubstanceDefinitionMoiety {

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
   * Role that the moiety is playing.
   */
  role?: CodeableConcept;

  /**
   * Identifier by which this moiety substance is known.
   */
  identifier?: Identifier;

  /**
   * Textual name for this moiety substance.
   */
  name?: string;

  /**
   * Stereochemistry type.
   */
  stereochemistry?: CodeableConcept;

  /**
   * Optical activity type.
   */
  opticalActivity?: CodeableConcept;

  /**
   * Molecular formula for this moiety of this substance, typically using
   * the Hill system.
   */
  molecularFormula?: string;

  /**
   * Quantitative value for this moiety.
   */
  amountQuantity?: Quantity;

  /**
   * Quantitative value for this moiety.
   */
  amountString?: string;

  /**
   * The measurement type of the quantitative value. In capturing the
   * actual relative amounts of substances or molecular fragments it may be
   * necessary to indicate whether the amount refers to, for example, a
   * mole ratio or weight ratio.
   */
  measurementType?: CodeableConcept;
}

/**
 * The molecular weight or weight range (for proteins, polymers or
 * nucleic acids).
 */
export interface SubstanceDefinitionMolecularWeight {

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
   * The method by which the molecular weight was determined.
   */
  method?: CodeableConcept;

  /**
   * Type of molecular weight such as exact, average (also known as. number
   * average), weight average.
   */
  type?: CodeableConcept;

  /**
   * Used to capture quantitative values for a variety of elements. If only
   * limits are given, the arithmetic mean would be the average. If only a
   * single definite value for a given element is given, it would be
   * captured in this field.
   */
  amount: Quantity;
}

/**
 * Names applicable to this substance.
 */
export interface SubstanceDefinitionName {

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
   * The actual name.
   */
  name: string;

  /**
   * Name type, for example 'systematic',  'scientific, 'brand'.
   */
  type?: CodeableConcept;

  /**
   * The status of the name, for example 'current', 'proposed'.
   */
  status?: CodeableConcept;

  /**
   * If this is the preferred name for this substance.
   */
  preferred?: boolean;

  /**
   * Human language that the name is written in.
   */
  language?: CodeableConcept[];

  /**
   * The use context of this name for example if there is a different name
   * a drug active ingredient as opposed to a food colour additive.
   */
  domain?: CodeableConcept[];

  /**
   * The jurisdiction where this name applies.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * A synonym of this particular name, by which the substance is also
   * known.
   */
  synonym?: SubstanceDefinitionName[];

  /**
   * A translation for this name into another human language.
   */
  translation?: SubstanceDefinitionName[];

  /**
   * Details of the official nature of this name.
   */
  official?: SubstanceDefinitionNameOfficial[];

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];
}

/**
 * Details of the official nature of this name.
 */
export interface SubstanceDefinitionNameOfficial {

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
   * Which authority uses this official name.
   */
  authority?: CodeableConcept;

  /**
   * The status of the official name, for example 'draft', 'active',
   * 'retired'.
   */
  status?: CodeableConcept;

  /**
   * Date of the official name change.
   */
  date?: string;
}

/**
 * General specifications for this substance.
 */
export interface SubstanceDefinitionProperty {

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
   * A code expressing the type of property.
   */
  type: CodeableConcept;

  /**
   * A value for the property.
   */
  valueCodeableConcept?: CodeableConcept;

  /**
   * A value for the property.
   */
  valueQuantity?: Quantity;

  /**
   * A value for the property.
   */
  valueDate?: string;

  /**
   * A value for the property.
   */
  valueBoolean?: boolean;

  /**
   * A value for the property.
   */
  valueAttachment?: Attachment;
}

/**
 * A link between this substance and another, with details of the
 * relationship.
 */
export interface SubstanceDefinitionRelationship {

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
   * A pointer to another substance, as a resource or just a
   * representational code.
   */
  substanceDefinitionReference?: Reference<SubstanceDefinition>;

  /**
   * A pointer to another substance, as a resource or just a
   * representational code.
   */
  substanceDefinitionCodeableConcept?: CodeableConcept;

  /**
   * For example &quot;salt to parent&quot;, &quot;active moiety&quot;, &quot;starting material&quot;,
   * &quot;polymorph&quot;, &quot;impurity of&quot;.
   */
  type: CodeableConcept;

  /**
   * For example where an enzyme strongly bonds with a particular
   * substance, this is a defining relationship for that enzyme, out of
   * several possible substance relationships.
   */
  isDefining?: boolean;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountQuantity?: Quantity;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountRatio?: Ratio;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountString?: string;

  /**
   * For use when the numeric has an uncertain range.
   */
  ratioHighLimitAmount?: Ratio;

  /**
   * An operator for the amount, for example &quot;average&quot;, &quot;approximately&quot;,
   * &quot;less than&quot;.
   */
  comparator?: CodeableConcept;

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];
}

/**
 * Material or taxonomic/anatomical source for the substance.
 */
export interface SubstanceDefinitionSourceMaterial {

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
   * A classification that provides the origin of the raw material.
   * Example: cat hair would be an Animal source type.
   */
  type?: CodeableConcept;

  /**
   * The genus of an organism, typically referring to the Latin epithet of
   * the genus element of the plant/animal scientific name.
   */
  genus?: CodeableConcept;

  /**
   * The species of an organism, typically referring to the Latin epithet
   * of the species of the plant/animal.
   */
  species?: CodeableConcept;

  /**
   * An anatomical origin of the source material within an organism.
   */
  part?: CodeableConcept;

  /**
   * The country or countries where the material is harvested.
   */
  countryOfOrigin?: CodeableConcept[];
}

/**
 * Structural information.
 */
export interface SubstanceDefinitionStructure {

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
   * Stereochemistry type.
   */
  stereochemistry?: CodeableConcept;

  /**
   * Optical activity type.
   */
  opticalActivity?: CodeableConcept;

  /**
   * Molecular formula of this substance, typically using the Hill system.
   */
  molecularFormula?: string;

  /**
   * Specified per moiety according to the Hill system, i.e. first C, then
   * H, then alphabetical, each moiety separated by a dot.
   */
  molecularFormulaByMoiety?: string;

  /**
   * The molecular weight or weight range (for proteins, polymers or
   * nucleic acids).
   */
  molecularWeight?: SubstanceDefinitionMolecularWeight;

  /**
   * The method used to elucidate the structure or characterization of the
   * drug substance. Examples: X-ray, HPLC, NMR, Peptide mapping, Ligand
   * binding assay.
   */
  technique?: CodeableConcept[];

  /**
   * The source of information about the structure.
   */
  sourceDocument?: Reference<DocumentReference>[];

  /**
   * A depiction of the structure or characterization of the substance.
   */
  representation?: SubstanceDefinitionStructureRepresentation[];
}

/**
 * A depiction of the structure or characterization of the substance.
 */
export interface SubstanceDefinitionStructureRepresentation {

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
   * The kind of structural representation (e.g. full, partial).
   */
  type?: CodeableConcept;

  /**
   * The structural representation or characterization as a text string in
   * a standard format.
   */
  representation?: string;

  /**
   * The format of the representation e.g. InChI, SMILES, MOLFILE, CDX,
   * SDF, PDB, mmCIF. The logical content type rather than the physical
   * file format of a document.
   */
  format?: CodeableConcept;

  /**
   * An attached file with the structural representation or
   * characterization e.g. a molecular structure graphic of the substance,
   * a JCAMP or AnIML file.
   */
  document?: Reference<DocumentReference>;
}
