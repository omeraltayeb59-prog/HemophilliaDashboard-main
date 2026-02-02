export interface Company {
  id: number;
  name: string;
  country: string;
  quantity: number;
}

export interface CompanyRequest {
  name: string;
  country: string;
  quantity: number;
}

export interface Factor {
  id: number;
  name: string;
  lotNo: string;
  quantity: number;
  expiryDate: string;
  mg: number;
  drugType: string;
  supplierName: string;
  companyName: string;
}

export interface FactorRequest {
  name: string;
  lotNo: string;
  quantity: number;
  expiryDate: string;
  mg: number;
  drugType: string;
  supplierName: string;
  companyName: string;
}

export interface Patient {
  id: number;
  fullName: string;
  nationalIdNumber: string;
  dateOfBirth: string;
  gender?: string;
  homeState?: string;
  homeCityOrTown?: string;
  homeLocality?: string;
  residenceType?: 'InsideSudan' | 'OutsideSudan';
  country?: string;
  cityOrTown?: string;
  locality?: string;
  state?: string;
  maritalStatus?: string;
  occupation?: string;
  contactNumber?: string;
  contactNumber1?: string;
  contactNumber2?: string;
  vitalStatus?: 'Alive' | 'Died' | 'Unknown';
  hemophiliaCenterId?: string;
  diagnosis?: string;
  diagnosisType?: string;
  diagnosisYear?: number;
  incidenceDate?: string;
  severity?: 'mild' | 'moderate' | 'severe' | 'unknown';
  factorPercent?: number;
  factorPercentDate?: string;
  familyHistory?: 'first_degree' | 'second_degree' | 'third_degree' | 'none';
  HasInhibitors?: boolean;
  hasInhibitors?: boolean;
  inhibitorLevel?: number;
  inhibitorScreeningDate?: string;
  inhibitors?: InhibitorEntry[];
  HasChronicDiseases?: boolean;
  chronicDiseases?: string[];
  chronicDiseaseOther?: string;
  bloodGroup?: string;
  longTermMedication?: boolean;
  testDates?: PatientTestDate[];
  otherMedicalTests?: OtherMedicalTest[];
  name?: string;
  age?: number;
  category?: string;
  factorLevelTestDate?: string;
  viralScreeningDate?: string;
  otherTestDate?: string;
  inhibitor?: boolean;
}

export type TestType = 'FactorLevel' | 'InhibitorScreening' | 'HBV' | 'HCV' | 'HIV' | 'Other';

export interface PatientTestDate {
  testType: TestType;
  hasTaken: boolean;
  testDate?: string;
  result?: 'positive' | 'negative';
}

export interface PatientRequest {
  fullName: string;
  nationalIdNumber: string;
  dateOfBirth: string;
  gender: string;
  contactNumber1: string;
  bloodGroup?: string;
  maritalStatus?: string;
  occupation?: string;
  contactNumber2?: string;
  contactRelation?: string;
  hemophiliaCenterId?: string;
  diagnosis?: string;
  diagnosisType?: string;
  diagnosisYear?: number;
  severity?: string;
  factorPercent?: number;
  factorPercentDate?: string;
  hasInhibitors?: boolean;
  familyHistory?: string;
  vitalStatus?: 'Alive' | 'Died' | 'Unknown';
  homeState?: string;
  homeCityOrTown?: string;
  homeLocality?: string;
  residenceType?: 'InsideSudan' | 'OutsideSudan';
  residenceState?: string;
  residenceCityOrTown?: string;
  residenceLocalArea?: string;
  residenceRegion?: string;
  state?: string;
  cityOrTown?: string;
  locality?: string;
  country?: string;
  incidenceDate?: string;
  HasInhibitors?: boolean;
  inhibitorLevel?: number;
  inhibitorScreeningDate?: string;
  inhibitors?: InhibitorEntry[];
  HasChronicDiseases?: boolean;
  chronicDiseases?: string[];
  chronicDiseaseOther?: string;
  longTermMedication?: boolean;
  testDates?: PatientTestDate[];
  otherMedicalTests?: OtherMedicalTest[];
}

export interface InhibitorEntry {
  inhibitorLevel?: number;
  inhibitorScreeningDate?: string;
}

export interface VisitDrug {
  drugId: number;
  quantity: number;
}

export interface PatientVisit {
  id: number;
  patientId: number;
  visitDate: string;
  centerName?: string;
  visitType?: string;
  diagnosisType?: string;
  complaint?: string;
  notes?: string;
  enteredBy?: string;
  createdAt?: string;
  vitalStatus?: 'Alive' | 'Died' | 'Unknown';
  managementPlan?: string;
  drugs?: VisitDrug[];
  centerState?: string;
  complaintOther?: string;
  complaintDetails?: string;
  serviceType?: 'new_visit' | 'followup' | 'hospital_admission';
  factorLevelTestDates?: string[];
  inhibitorScreeningDates?: string[];
  viralScreeningDates?: string[];
  otherTestDates?: string[];
  otherMedicalTests?: OtherMedicalTest[];
  inhibitors?: InhibitorEntry[];
}

export interface OtherMedicalTest {
  testName: string;
  testResult: string;
  testDate: string;
}

export interface VisitTest {
  testName: string;
  result: string;
  testDate: string;
}

export interface VisitTestRequest {
  testName: string;
  result: string;
  testDate: string;
}

export interface VisitDrugRequest {
  drugId: number;
  quantity: number;
}

export interface PatientVisitRequest {
  patientId: number;
  visitType?: string;
  visitDate: string;
  diagnosis?: string;
  diagnosisType?: string;
  complaint?: string;
  managementPlan?: string;
  notes?: string;
  centerName?: string;
  enteredBy?: string;
  hasInhibitors?: boolean;
  inhibitorLevel?: number;
  vitalStatus?: 'Alive' | 'Died' | 'Unknown';
  drugs?: VisitDrugRequest[];
  tests?: VisitTestRequest[];
}

export interface Treatment {
  id: number;
  patientId: number;
  treatmentCenter: string;
  treatmentType: string;
  indicationOfTreatment: string;
  lot: string;
  noteDate: string;
  quantityLot: number;
}

export interface TreatmentRequest {
  patientId: number;
  treatmentCenter: string;
  treatmentType: string;
  indicationOfTreatment: string;
  lot: string;
  noteDate: string;
  quantityLot: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  role?: string;
  state?: string;
}


export interface CellPhoneTreatment {
  id: number;
  patientId: number;
  cellTreatmentCenter: string;
  treatmentType: string;
  indicationOfTreatment: string;
  lot: string;
  noteDate: string;
  quantityLot: number;
}

export interface CellPhoneTreatmentRequest {
  patientId: number;
  cellTreatmentCenter?: string;
  treatmentType?: string;
  indicationOfTreatment?: string;
  lot?: string;
  noteDate: string;
  quantityLot: number;
}

export interface MedicineDistribution {
  id: number;
  factorId: number;
  state: string;
  quantity: number;
  quantityDistributed: number;
  distributionDate: string;
  expiryDate: string;
  mg: number;
  companyName: string;
  category: string;
  status: string;
  deliveryDate: string;
}

export interface MedicineDistributionRequest {
  factorId: number;
  state: string;
  quantity: number;
  quantityDistributed: number;
  distributionDate: string;
  expiryDate: string;
  mg: number;
  companyName: string;
  category: string;
}

export interface FactorDistribution {
  id: number;
  factorId: number;
  factorName: string;
  state: string;
  quantityDistributed: number;
  distributionDate: string;
  
}

export interface FactorDistributionRequest {
  factorId: number;
  state: string;
  quantityDistributed: number;
  distributionDate: string;
}