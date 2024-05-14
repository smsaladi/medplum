import { HTTP_HL7_ORG } from '@medplum/core';
import { ResourceType } from '@medplum/fhirtypes';

export const RESOURCE_PROFILE_URLS: Partial<Record<ResourceType, string>> = {
  Patient: HTTP_HL7_ORG + '/fhir/us/core/StructureDefinition/us-core-patient',
  ServiceRequest: 'http://medplum.com/StructureDefinition/medplum-provider-lab-procedure-servicerequest',
  Device: HTTP_HL7_ORG + '/fhir/us/core/StructureDefinition/us-core-implantable-device',
  Condition: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns',

  // $this blocked
  // DocumentReference: HTTP_HL7_ORG + '/fhir/us/core/StructureDefinition/us-core-documentreference',
  // DiagnosticReport: HTTP_HL7_ORG + '/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note',
  // MedicationRequest: HTTP_HL7_ORG + '/fhir/us/core/StructureDefinition/us-core-medicationrequest',
  CarePlan: HTTP_HL7_ORG + '/fhir/us/core/StructureDefinition/us-core-careplan',
};
