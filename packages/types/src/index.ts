export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTimeOffset: string
  Decimal: number
  Date: string
  DateTime: string
  Seconds: number
  Milliseconds: number
}

export type AllergyIntolerance = {
  assertedDate?: Maybe<PartialDateTime>
  asserter?: Maybe<ResourceReference>
  category?: Maybe<Array<Maybe<AllergyIntoleranceCategoryCode>>>
  clinicalStatus: AllergyIntoleranceClinicalStatusCode
  code: CodeableConcept
  criticality?: Maybe<AllergyIntoleranceCriticalityCode>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  lastOccurrence?: Maybe<PartialDateTime>
  metadata: Metadata
  note?: Maybe<Array<Maybe<Annotation>>>
  onSet?: Maybe<AllergyIntoleranceOnSet>
  reaction?: Maybe<Array<Maybe<AllergyIntoleranceReaction>>>
  recorder?: Maybe<ResourceReference>
  text?: Maybe<Narrative>
  type?: Maybe<AllergyIntoleranceTypeCode>
  verificationStatus?: Maybe<AllergyIntoleranceVerificationStatusCode>
}

export enum AllergyIntoleranceCategoryCode {
  Food = 'FOOD',
  Medication = 'MEDICATION',
  Environment = 'ENVIRONMENT',
  Biologic = 'BIOLOGIC',
}

export enum AllergyIntoleranceClinicalStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Resolved = 'RESOLVED',
}

export enum AllergyIntoleranceCriticalityCode {
  Low = 'LOW',
  High = 'HIGH',
  UnableToAssess = 'UNABLE_TO_ASSESS',
}

export type AllergyIntoleranceOnSet = {
  extension?: Maybe<Array<Maybe<Extension>>>
  onSetAge?: Maybe<Quantity>
  onSetDateTime?: Maybe<PartialDateTime>
  onSetPeriod?: Maybe<Period>
  onSetRange?: Maybe<Range>
  onSetString?: Maybe<Scalars['String']>
}

export type AllergyIntoleranceReaction = {
  description?: Maybe<Scalars['String']>
  exposureRoute?: Maybe<CodeableConcept>
  extension?: Maybe<Array<Maybe<Extension>>>
  manifestation: Array<Maybe<CodeableConcept>>
  note?: Maybe<Array<Maybe<Annotation>>>
  onSet?: Maybe<PartialDateTime>
  severity?: Maybe<AllergyIntoleranceReactionSeverityCode>
  substance?: Maybe<CodeableConcept>
}

export enum AllergyIntoleranceReactionSeverityCode {
  Mild = 'MILD',
  Moderate = 'MODERATE',
  Severe = 'SEVERE',
}

export enum AllergyIntoleranceTypeCode {
  Allergy = 'ALLERGY',
  Intolerance = 'INTOLERANCE',
}

export enum AllergyIntoleranceVerificationStatusCode {
  Unconfirmed = 'UNCONFIRMED',
  Confirmed = 'CONFIRMED',
  Refuted = 'REFUTED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export type Annotation = {
  author?: Maybe<ResourceReference>
  extension?: Maybe<Array<Maybe<Extension>>>
  text: Scalars['String']
  time?: Maybe<PartialDateTime>
}

export type Attachment = {
  contentType?: Maybe<Scalars['String']>
  creation?: Maybe<PartialDateTime>
  extension?: Maybe<Array<Maybe<Extension>>>
  hash?: Maybe<Scalars['String']>
  language?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type CarePlan = {
  activity?: Maybe<CarePlanActivity>
  addresses?: Maybe<Array<Maybe<ResourceReference>>>
  author?: Maybe<Array<Maybe<ResourceReference>>>
  basedOn?: Maybe<Array<Maybe<ResourceReference>>>
  careTeam?: Maybe<Array<Maybe<ResourceReference>>>
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  context?: Maybe<ResourceReference>
  definition?: Maybe<Array<Maybe<ResourceReference>>>
  description?: Maybe<Scalars['String']>
  extension?: Maybe<Array<Maybe<Extension>>>
  goal?: Maybe<Array<Maybe<ResourceReference>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  intent: CarePlanIntentCode
  metadata: Metadata
  note?: Maybe<Array<Maybe<Annotation>>>
  partOf?: Maybe<Array<Maybe<ResourceReference>>>
  period?: Maybe<Period>
  replaces?: Maybe<Array<Maybe<ResourceReference>>>
  status: CarePlanStatusCode
  supportingInfo?: Maybe<Array<Maybe<ResourceReference>>>
  text?: Maybe<Narrative>
  title?: Maybe<Scalars['String']>
}

export type CarePlanActivity = {
  detail?: Maybe<CarePlanActivityDetail>
  extension?: Maybe<Array<Maybe<Extension>>>
  outcomeCodeableConcept?: Maybe<Array<Maybe<CodeableConcept>>>
  outcomeReference?: Maybe<Array<Maybe<ResourceReference>>>
  progress?: Maybe<Array<Maybe<Annotation>>>
  reference?: Maybe<ResourceReference>
}

export type CarePlanActivityDetail = {
  category?: Maybe<CodeableConcept>
  code?: Maybe<CodeableConcept>
  dailyAmount?: Maybe<Quantity>
  definition?: Maybe<ResourceReference>
  description?: Maybe<Scalars['String']>
  extension?: Maybe<Array<Maybe<Extension>>>
  goal?: Maybe<Array<Maybe<ResourceReference>>>
  location?: Maybe<ResourceReference>
  performer?: Maybe<Array<Maybe<ResourceReference>>>
  product?: Maybe<CarePlanActivityDetailProduct>
  prohibited?: Maybe<Scalars['Boolean']>
  quantity?: Maybe<Quantity>
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>
  reasonReference?: Maybe<Array<Maybe<ResourceReference>>>
  status: CarePlanActivityDetailStatusCode
  statusReason?: Maybe<Scalars['String']>
}

export type CarePlanActivityDetailProduct = {
  extension?: Maybe<Array<Maybe<Extension>>>
  productCodeableConcept?: Maybe<CodeableConcept>
  productReference?: Maybe<ResourceReference>
}

export enum CarePlanActivityDetailStatusCode {
  NotStarted = 'NOT_STARTED',
  Scheduled = 'SCHEDULED',
  InProgress = 'IN_PROGRESS',
  OnHold = 'ON_HOLD',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Unknown = 'UNKNOWN',
}

export enum CarePlanIntentCode {
  Proposal = 'PROPOSAL',
  Plan = 'PLAN',
  Order = 'ORDER',
  Option = 'OPTION',
}

export enum CarePlanStatusCode {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Cancelled = 'CANCELLED',
  Unknown = 'UNKNOWN',
}

export type CodeableConcept = {
  coding?: Maybe<Array<Maybe<Coding>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  text?: Maybe<Scalars['String']>
}

export type Coding = {
  code?: Maybe<Scalars['String']>
  display: Scalars['String']
  extension?: Maybe<Array<Maybe<Extension>>>
  system?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type Condition = {
  abatement?: Maybe<ConditionAbatement>
  assertedDate?: Maybe<PartialDateTime>
  asserter?: Maybe<ResourceReference>
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  clinicalStatus?: Maybe<ConditionClinicalStatus>
  code?: Maybe<CodeableConcept>
  context?: Maybe<ResourceReference>
  evidence?: Maybe<Array<Maybe<ConditionEvidence>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  metadata: Metadata
  onset?: Maybe<ConditionOnset>
  severity?: Maybe<CodeableConcept>
  stage?: Maybe<ConditionStage>
  subject: ResourceReference
  text?: Maybe<Narrative>
  verificationStatus?: Maybe<ConditionVerificationStatus>
}

export type ConditionAbatement = {
  age?: Maybe<Quantity>
  dateTime: Period
  extension?: Maybe<Array<Maybe<Extension>>>
}

export enum ConditionClinicalStatus {
  Active = 'ACTIVE',
  Recurrence = 'RECURRENCE',
  Inactive = 'INACTIVE',
  Remission = 'REMISSION',
  Resolved = 'RESOLVED',
}

export type ConditionEvidence = {
  code?: Maybe<Array<Maybe<CodeableConcept>>>
  detail?: Maybe<ResourceReference>
  extension?: Maybe<Array<Maybe<Extension>>>
}

export type ConditionOnset = {
  age?: Maybe<Quantity>
  dateTime?: Maybe<PartialDateTime>
  extension?: Maybe<Array<Maybe<Extension>>>
  period?: Maybe<Period>
  range?: Maybe<Range>
  string?: Maybe<Scalars['String']>
}

export type ConditionStage = {
  assessment?: Maybe<Array<Maybe<ResourceReference>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  summary?: Maybe<CodeableConcept>
}

export enum ConditionVerificationStatus {
  Provisional = 'PROVISIONAL',
  Differential = 'DIFFERENTIAL',
  Confirmed = 'CONFIRMED',
  Refuted = 'REFUTED',
  EnteredinError = 'ENTEREDIN_ERROR',
  Unknown = 'UNKNOWN',
}

export type DataAvailability = {
  dataSources?: Maybe<Array<Maybe<Coding>>>
  id: Scalars['ID']
  metadata: Metadata
}

export enum DataProviderPermission {
  Ehr = 'EHR',
  Yhcr = 'YHCR',
  Lypft = 'LYPFT',
  GpConnect = 'GP_CONNECT',
}

export type DocumentReference = {
  authenticator?: Maybe<ResourceReference>
  author?: Maybe<Array<Maybe<ResourceReference>>>
  class?: Maybe<CodeableConcept>
  content: Array<Maybe<DocumentReferenceContent>>
  context?: Maybe<DocumentReferenceContext>
  created?: Maybe<PartialDateTime>
  custodian?: Maybe<ResourceReference>
  description?: Maybe<Scalars['String']>
  docStatus?: Maybe<DocumentReferenceDocStatusCode>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  indexed: PartialDateTime
  masterIdentifier?: Maybe<Identifier>
  metadata: Metadata
  relatesTo?: Maybe<Array<Maybe<DocumentReferenceRelatesTo>>>
  securityLabel?: Maybe<Array<Maybe<ResourceReference>>>
  status: DocumentReferenceStatusCode
  text?: Maybe<Narrative>
  type: CodeableConcept
}

export type DocumentReferenceContent = {
  attachment: Attachment
  extension?: Maybe<Array<Maybe<Extension>>>
  format?: Maybe<Coding>
}

export type DocumentReferenceContext = {
  encounter?: Maybe<DocumentReference>
  event?: Maybe<Array<Maybe<CodeableConcept>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  facilityType?: Maybe<CodeableConcept>
  period?: Maybe<Period>
  practiceSetting?: Maybe<CodeableConcept>
  related?: Maybe<Array<Maybe<DocumentReferenceRelated>>>
  sourcePatientInfo?: Maybe<DocumentReference>
}

export enum DocumentReferenceDocStatusCode {
  Preliminary = 'PRELIMINARY',
  Final = 'FINAL',
  Appended = 'APPENDED',
  Amended = 'AMENDED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export type DocumentReferenceRelated = {
  extension?: Maybe<Array<Maybe<Extension>>>
  identifier?: Maybe<Identifier>
  ref?: Maybe<ResourceReference>
}

export type DocumentReferenceRelatesTo = {
  code: DocumentReferenceRelatesToCode
  extension?: Maybe<Array<Maybe<Extension>>>
  target: ResourceReference
}

export enum DocumentReferenceRelatesToCode {
  Replaces = 'REPLACES',
  Transforms = 'TRANSFORMS',
  Signs = 'SIGNS',
  Appends = 'APPENDS',
}

export enum DocumentReferenceStatusCode {
  Current = 'CURRENT',
  Superseded = 'SUPERSEDED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export type Dosage = {
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  metadata: Metadata
  patientInstruction?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type Ehr = {
  flags?: Maybe<Array<Maybe<Flag>>>
  guidanceList?: Maybe<GuidanceList>
}

export type EhrFlagsArgs = {
  patientGuid: Scalars['String']
}

export type EhrGuidanceListArgs = {
  patientGuid: Scalars['String']
  instanceSetGuid: Scalars['String']
}

export type Encounter = {
  account?: Maybe<ResourceReference>
  appointment?: Maybe<ResourceReference>
  class?: Maybe<Coding>
  classHistory?: Maybe<Array<Maybe<EncounterClassHistory>>>
  diagnosis?: Maybe<Array<Maybe<EncounterDiagnosis>>>
  episodeOfCare?: Maybe<Array<Maybe<ResourceReference>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  hospitalization?: Maybe<EncounterHospitalisation>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  incomingReferral?: Maybe<Array<Maybe<ResourceReference>>>
  length?: Maybe<Quantity>
  location?: Maybe<Array<Maybe<EncounterLocation>>>
  metadata: Metadata
  participant?: Maybe<Array<Maybe<EncounterParticipant>>>
  partOf?: Maybe<ResourceReference>
  period?: Maybe<Period>
  priority?: Maybe<CodeableConcept>
  reason?: Maybe<Array<Maybe<CodeableConcept>>>
  serviceProvider?: Maybe<ResourceReference>
  status?: Maybe<EncounterStatusCode>
  statusHistory?: Maybe<Array<Maybe<EncounterStatusHistory>>>
  text?: Maybe<Narrative>
  type?: Maybe<Array<Maybe<CodeableConcept>>>
}

export type EncounterClassHistory = {
  class: Coding
  extension?: Maybe<Array<Maybe<Extension>>>
  period: Period
}

export type EncounterDiagnosis = {
  condition?: Maybe<ResourceReference>
  extension?: Maybe<Array<Maybe<Extension>>>
  rank?: Maybe<Scalars['Int']>
  role?: Maybe<CodeableConcept>
}

export type EncounterHospitalisation = {
  admitSource?: Maybe<CodeableConcept>
  destination?: Maybe<ResourceReference>
  dietPreference?: Maybe<Array<Maybe<CodeableConcept>>>
  dischargeDisposition?: Maybe<CodeableConcept>
  extension?: Maybe<Array<Maybe<Extension>>>
  origin?: Maybe<ResourceReference>
  preAdmissionIdentifier?: Maybe<Identifier>
  reAdmission?: Maybe<CodeableConcept>
  specialArrangement?: Maybe<Array<Maybe<CodeableConcept>>>
  specialCourtesy?: Maybe<Array<Maybe<CodeableConcept>>>
}

export type EncounterLocation = {
  extension?: Maybe<Array<Maybe<Extension>>>
  location: ResourceReference
  period?: Maybe<Period>
  status?: Maybe<EncounterLocationStatusCode>
}

export enum EncounterLocationStatusCode {
  Planned = 'PLANNED',
  Active = 'ACTIVE',
  Reserved = 'RESERVED',
  Completed = 'COMPLETED',
}

export type EncounterPage = {
  page: Scalars['Int']
  pageSize: Scalars['Int']
  resources: Array<Maybe<Encounter>>
  totalResources?: Maybe<Scalars['Int']>
}

export type EncounterParticipant = {
  extension?: Maybe<Array<Maybe<Extension>>>
  individual?: Maybe<ResourceReference>
  period?: Maybe<Period>
  type?: Maybe<Array<Maybe<CodeableConcept>>>
}

export enum EncounterStatusCode {
  Planned = 'PLANNED',
  Arrived = 'ARRIVED',
  Triaged = 'TRIAGED',
  InProgress = 'IN_PROGRESS',
  OnLeave = 'ON_LEAVE',
  Finished = 'FINISHED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Unknown = 'UNKNOWN',
}

export type EncounterStatusHistory = {
  extension?: Maybe<Array<Maybe<Extension>>>
  period: Period
  status?: Maybe<EncounterStatusCode>
}

export enum EntityAction {
  Create = 'CREATE',
  Read = 'READ',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

export type EntityPermission = {
  actions: Array<EntityAction>
  extension?: Maybe<Array<Maybe<Extension>>>
  type: EntityType
}

export enum EntityType {
  HospitalStay = 'HOSPITAL_STAY',
  Flag = 'FLAG',
  Patient = 'PATIENT',
  AllergyIntolerance = 'ALLERGY_INTOLERANCE',
  Appointment = 'APPOINTMENT',
  CarePlan = 'CARE_PLAN',
  CareTeam = 'CARE_TEAM',
  CommunityTreatmentOrder = 'COMMUNITY_TREATMENT_ORDER',
  Condition = 'CONDITION',
  Document = 'DOCUMENT',
  Encounter = 'ENCOUNTER',
  MedicationList = 'MEDICATION_LIST',
  Observation = 'OBSERVATION',
  Guidance = 'GUIDANCE',
  Task = 'TASK',
  DataAvailability = 'DATA_AVAILABILITY',
  IamToken = 'IAM_TOKEN',
}

export type EntryType = {
  item?: Maybe<ItemType>
}

export type EpisodeOfCare = {
  account?: Maybe<ResourceReference>
  careManager?: Maybe<ResourceReference>
  diagnosis?: Maybe<Array<Maybe<EpisodeOfCareDiagnosis>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  managingOrganization?: Maybe<ResourceReference>
  metadata: Metadata
  period?: Maybe<Period>
  referralRequest?: Maybe<Array<Maybe<ResourceReference>>>
  status: EpisodeOfCareStatusCode
  statusHistory?: Maybe<Array<Maybe<EpisodeOfCareStatusHistory>>>
  team?: Maybe<Array<Maybe<ResourceReference>>>
  text?: Maybe<Narrative>
  type?: Maybe<Array<Maybe<CodeableConcept>>>
}

export type EpisodeOfCareDiagnosis = {
  condition: ResourceReference
  extension?: Maybe<Array<Maybe<Extension>>>
  rank?: Maybe<Scalars['Int']>
  role?: Maybe<CodeableConcept>
}

export enum EpisodeOfCareStatusCode {
  Planned = 'PLANNED',
  WaitList = 'WAIT_LIST',
  Active = 'ACTIVE',
  OnHold = 'ON_HOLD',
  Finished = 'FINISHED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export type EpisodeOfCareStatusHistory = {
  extension?: Maybe<Array<Maybe<Extension>>>
  period: Period
  status: EncounterStatusCode
}

export type Extension = {
  extension?: Maybe<Array<Maybe<Extension>>>
  url: Scalars['String']
  valueCodeableConcept?: Maybe<CodeableConcept>
  valueString: Scalars['String']
}

export enum FeatureInstance {
  FormsForHealth = 'FORMS_FOR_HEALTH',
  EMedsAccess = 'E_MEDS_ACCESS',
  PacsAccess = 'PACS_ACCESS',
  TestToggle = 'TEST_TOGGLE',
}

export type FeatureToggle = {
  extension?: Maybe<Array<Maybe<Extension>>>
  feature: FeatureInstance
  message?: Maybe<Scalars['String']>
  status: FeatureToggleStatus
}

export enum FeatureToggleStatus {
  Visible = 'VISIBLE',
  Hidden = 'HIDDEN',
  Message = 'MESSAGE',
}

export type Flag = {
  author?: Maybe<ResourceReference>
  category?: Maybe<CodeableConcept>
  code: CodeableConcept
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  metadata: Metadata
  period?: Maybe<Period>
  status: FlagStatusCode
  text?: Maybe<Narrative>
}

export enum FlagStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export type GpConnect = {
  dataAvailability?: Maybe<DataAvailability>
  medicationList?: Maybe<MedicationList>
}

export type GpConnectDataAvailabilityArgs = {
  nhsNumber: Scalars['String']
}

export type GpConnectMedicationListArgs = {
  nhsNumber: Scalars['String']
}

export type Guidance = {
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  metadata: Metadata
  note?: Maybe<Array<Maybe<Annotation>>>
  text?: Maybe<Narrative>
}

export type GuidanceList = {
  code?: Maybe<CodeableConcept>
  date?: Maybe<PartialDateTime>
  entry?: Maybe<EntryType>
  extension?: Maybe<Array<Maybe<Extension>>>
  guidance?: Maybe<Array<Maybe<Guidance>>>
  id: Scalars['ID']
  metadata: Metadata
  text?: Maybe<Narrative>
}

export type Identifier = {
  assigner?: Maybe<ResourceReference>
  extension?: Maybe<Array<Maybe<Extension>>>
  period?: Maybe<Period>
  system?: Maybe<Scalars['String']>
  type?: Maybe<CodeableConcept>
  use?: Maybe<IdentifierUseCode>
  value: Scalars['String']
}

export enum IdentifierUseCode {
  Usual = 'USUAL',
  Official = 'OFFICIAL',
  Temp = 'TEMP',
  Secondary = 'SECONDARY',
}

export type ItemType = {
  extension?: Maybe<Array<Maybe<Extension>>>
  reference?: Maybe<ResourceReference>
}

export enum LaunchApp {
  Forms = 'FORMS',
  Alfresco = 'ALFRESCO',
}

export type LaunchPermission = {
  application: LaunchApp
  extension?: Maybe<Array<Maybe<Extension>>>
  intents: Array<Scalars['String']>
  resource: Scalars['String']
}

export type Lypft = {
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>
  appointments?: Maybe<EncounterPage>
  carePlans?: Maybe<Array<Maybe<CarePlan>>>
  careTeams?: Maybe<Array<Maybe<EpisodeOfCare>>>
  communityTreatmentOrders?: Maybe<Array<Maybe<LypftCommunityTreatmentOrder>>>
  dataAvailability?: Maybe<DataAvailability>
  documents?: Maybe<Array<Maybe<DocumentReference>>>
  flags?: Maybe<Array<Maybe<Flag>>>
  hospitalStays?: Maybe<Array<Maybe<Encounter>>>
}

export type LypftAllergyIntolerancesArgs = {
  nhsNumber: Scalars['String']
  clinicalStatus?: Maybe<Array<Maybe<AllergyIntoleranceClinicalStatusCode>>>
}

export type LypftAppointmentsArgs = {
  nhsNumber: Scalars['String']
  status?: Maybe<Array<Maybe<EncounterStatusCode>>>
  page?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

export type LypftCarePlansArgs = {
  nhsNumber: Scalars['String']
}

export type LypftCareTeamsArgs = {
  nhsNumber: Scalars['String']
}

export type LypftCommunityTreatmentOrdersArgs = {
  nhsNumber: Scalars['String']
}

export type LypftDataAvailabilityArgs = {
  nhsNumber: Scalars['String']
}

export type LypftDocumentsArgs = {
  nhsNumber: Scalars['String']
}

export type LypftFlagsArgs = {
  nhsNumber: Scalars['String']
}

export type LypftHospitalStaysArgs = {
  nhsNumber: Scalars['String']
}

export type LypftCommunityTreatmentOrder = {
  consentToTreat?: Maybe<Scalars['String']>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  legalStatus?: Maybe<CodeableConcept>
  metadata: Metadata
  period: Period
  restrictions?: Maybe<Scalars['String']>
  text?: Maybe<Narrative>
}

export type Medication = {
  code?: Maybe<CodeableConcept>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  metadata: Metadata
  text?: Maybe<Narrative>
}

export type MedicationList = {
  code?: Maybe<CodeableConcept>
  date?: Maybe<PartialDateTime>
  entry?: Maybe<EntryType>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  medicationStatements?: Maybe<Array<Maybe<MedicationStatement>>>
  metadata: Metadata
  text?: Maybe<Narrative>
}

export type MedicationStatement = {
  dosage?: Maybe<Array<Maybe<Dosage>>>
  effective?: Maybe<PartialDateTime>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  medication: Medication
  metadata: Metadata
  note?: Maybe<Array<Maybe<Annotation>>>
  status: MedicationStatusCode
  subject: ResourceReference
  taken: TakenCode
  text?: Maybe<Narrative>
}

export enum MedicationStatusCode {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Intended = 'INTENDED',
  Stopped = 'STOPPED',
  OnHold = 'ON_HOLD',
}

export type Metadata = {
  dataSources: Array<Maybe<Coding>>
  extension?: Maybe<Array<Maybe<Extension>>>
  isRedacted: Scalars['Boolean']
  lastUpdated?: Maybe<Scalars['DateTimeOffset']>
  requestedWhen: Scalars['DateTimeOffset']
  security?: Maybe<Array<Maybe<Coding>>>
  versionId?: Maybe<Scalars['String']>
}

export type Narrative = {
  div: Scalars['String']
  extension?: Maybe<Array<Maybe<Extension>>>
  status?: Maybe<NarrativeStatusCode>
  text: Scalars['String']
}

export enum NarrativeStatusCode {
  Generated = 'GENERATED',
  Extensions = 'EXTENSIONS',
  Additional = 'ADDITIONAL',
  Empty = 'EMPTY',
}

export type Observation = {
  basedOn?: Maybe<ResourceReference>
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  code: CodeableConcept
  comment?: Maybe<Scalars['String']>
  component?: Maybe<Array<Maybe<ObservationComponent>>>
  context?: Maybe<ResourceReference>
  dataAbsentReason?: Maybe<CodeableConcept>
  device?: Maybe<ResourceReference>
  effective?: Maybe<ObservationEffective>
  extension?: Maybe<Array<Maybe<Extension>>>
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  interpretation?: Maybe<CodeableConcept>
  issued?: Maybe<PartialDateTime>
  metadata: Metadata
  method?: Maybe<CodeableConcept>
  performer?: Maybe<Array<Maybe<ResourceReference>>>
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  related?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  specimen?: Maybe<ResourceReference>
  status: ObservationStatusCode
  subject: ResourceReference
  text?: Maybe<Narrative>
  value?: Maybe<ObservationValue>
}

export type ObservationComponent = {
  code: CodeableConcept
  dataAbsentReason?: Maybe<CodeableConcept>
  extension?: Maybe<Array<Maybe<Extension>>>
  interpretation?: Maybe<CodeableConcept>
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  value?: Maybe<ObservationValue>
}

export type ObservationEffective = {
  effectiveDateTime?: Maybe<PartialDateTime>
  effectivePeriod?: Maybe<Period>
  extension?: Maybe<Array<Maybe<Extension>>>
}

export type ObservationReferenceRange = {
  age?: Maybe<Range>
  appliesTo?: Maybe<Array<Maybe<CodeableConcept>>>
  extension?: Maybe<Array<Maybe<Extension>>>
  high?: Maybe<Quantity>
  low?: Maybe<Quantity>
  text?: Maybe<Scalars['String']>
  type?: Maybe<CodeableConcept>
}

export enum ObservationStatusCode {
  Registered = 'REGISTERED',
  Preliminary = 'PRELIMINARY',
  Final = 'FINAL',
  Amended = 'AMENDED',
  Corrected = 'CORRECTED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Unknown = 'UNKNOWN',
}

export type ObservationValue = {
  extension?: Maybe<Array<Maybe<Extension>>>
  valueAttachment?: Maybe<Attachment>
  valueBoolean?: Maybe<Scalars['Boolean']>
  valueCodeableConcept?: Maybe<CodeableConcept>
  valueDateTime?: Maybe<PartialDateTime>
  valuePeriod?: Maybe<Period>
  valueQuantity?: Maybe<Quantity>
  valueRange?: Maybe<Range>
  valueRatio?: Maybe<Ratio>
  valueSampledData?: Maybe<SampledData>
  valueString?: Maybe<Scalars['String']>
}

export type PartialDateTime = {
  kind?: Maybe<PartialDateTimeKindCode>
  value?: Maybe<Scalars['DateTimeOffset']>
}

export enum PartialDateTimeKindCode {
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME',
}

export type Period = {
  end?: Maybe<PartialDateTime>
  extension?: Maybe<Array<Maybe<Extension>>>
  start?: Maybe<PartialDateTime>
}

export type Quantity = {
  code?: Maybe<Scalars['String']>
  comparator?: Maybe<QuantityComparatorCode>
  extension?: Maybe<Array<Maybe<Extension>>>
  system?: Maybe<Scalars['String']>
  unit?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Decimal']>
}

export enum QuantityComparatorCode {
  LessThan = 'LESS_THAN',
  LessOrEqualTo = 'LESS_OR_EQUAL_TO',
  GreaterOrEqualTo = 'GREATER_OR_EQUAL_TO',
  GreaterThan = 'GREATER_THAN',
}

export type Query = {
  ehr?: Maybe<Ehr>
  gpConnect?: Maybe<GpConnect>
  lypft?: Maybe<Lypft>
  user?: Maybe<User>
  yhcr?: Maybe<Yhcr>
}

export type QueryYhcrArgs = {
  reasonForAccess: ReasonForAccessCode
}

export type Range = {
  extension?: Maybe<Array<Maybe<Extension>>>
  high?: Maybe<Quantity>
  low?: Maybe<Quantity>
}

export type Ratio = {
  denominator?: Maybe<Quantity>
  extension?: Maybe<Array<Maybe<Extension>>>
  numerator?: Maybe<Quantity>
}

export enum ReasonForAccessCode {
  DirectCareEmergency = 'DIRECT_CARE_EMERGENCY',
  DirectCareNonEmergency = 'DIRECT_CARE_NON_EMERGENCY',
  IndirectCareInContext = 'INDIRECT_CARE_IN_CONTEXT',
  IndirectCareNotInContext = 'INDIRECT_CARE_NOT_IN_CONTEXT',
  AnalyticsAccess = 'ANALYTICS_ACCESS',
  Administration = 'ADMINISTRATION',
}

export type ResourceReference = {
  display: Scalars['String']
  extension?: Maybe<Array<Maybe<Extension>>>
  identifier?: Maybe<Array<Maybe<Identifier>>>
  reference?: Maybe<Scalars['String']>
  typeName: Scalars['String']
}

export type SampledData = {
  data: Scalars['String']
  dimensions: Scalars['Int']
  extension?: Maybe<Array<Maybe<Extension>>>
  factor?: Maybe<Scalars['Decimal']>
  lowerLimit?: Maybe<Scalars['Decimal']>
  origin: Quantity
  period?: Maybe<Scalars['Decimal']>
  upperLimit?: Maybe<Scalars['Decimal']>
}

export enum TakenCode {
  Yes = 'YES',
  No = 'NO',
  Unknown = 'UNKNOWN',
  NotApplicable = 'NOT_APPLICABLE',
}

export type User = {
  dataProviderPermissions?: Maybe<Array<Maybe<DataProviderPermission>>>
  entityPermissions?: Maybe<Array<Maybe<EntityPermission>>>
  featureToggles?: Maybe<Array<Maybe<FeatureToggle>>>
  fullName: Scalars['String']
  id: Scalars['ID']
  launchPermissions?: Maybe<Array<Maybe<LaunchPermission>>>
  metadata: Metadata
  organisationIdentifier: Scalars['String']
  userName: Scalars['String']
}

export type Yhcr = {
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>
  conditions?: Maybe<Array<Maybe<Condition>>>
  dataAvailability?: Maybe<DataAvailability>
  documents?: Maybe<Array<Maybe<DocumentReference>>>
  encounters?: Maybe<Array<Maybe<Encounter>>>
  observations?: Maybe<Array<Maybe<Observation>>>
}

export type YhcrAllergyIntolerancesArgs = {
  nhsNumber: Scalars['String']
}

export type YhcrConditionsArgs = {
  nhsNumber: Scalars['String']
}

export type YhcrDataAvailabilityArgs = {
  nhsNumber: Scalars['String']
}

export type YhcrDocumentsArgs = {
  nhsNumber: Scalars['String']
}

export type YhcrEncountersArgs = {
  nhsNumber: Scalars['String']
}

export type YhcrObservationsArgs = {
  nhsNumber: Scalars['String']
}

export enum RedactedPosition {
  Left = 'LEFT',
  Right = 'RIGHT',
}
