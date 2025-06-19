export interface IVendor {
  vendor_id: number;
  company_name: string;
  title: string;
  industry_id: number;
  description?: string;
  contact_person: string;
  contact_email: string;
  contact_phone: string;
  contact: string;
  logo_file: string;
  license_number: string;
  insurance_info: string;
  contractor_license: string;
  comments?: string;
  rating?: number;
  expiration_date?: string;
}
