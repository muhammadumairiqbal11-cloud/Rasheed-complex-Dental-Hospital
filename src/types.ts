export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'medical' | 'dental' | 'support';
  description: string;
  details: string[];
  iconName: string;
  badgeText?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface HospitalContactInfo {
  name: string;
  subtitle: string;
  address: string;
  city: string;
  phones: string[];
  emails: string[];
}
