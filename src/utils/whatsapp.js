import { BUSINESS_PHONE } from '@/config/site'

/** Upper secondary Chemistry — Teacher Peng Rong */
export const TEACHER_PENG_RONG_PHONE = '6596508879'

export function buildWhatsappUrl(message, phone = BUSINESS_PHONE) {
  const digits = String(phone).replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_ENQUIRY_MESSAGE =
  'Hi Teacher Karen, I would like to ask about tuition for my child.'

export function chemistryEnquiryMessage() {
  return "Hi Peng Rong, I'm interested in O Level Chemistry tuition at Tuition @ Pioneer. Could I find out more about the classes?"
}

export function physicsEnquiryMessage() {
  return "Hi Teacher Peng Rong, I'm interested in O Level Physics tuition at Tuition @ Pioneer. Could I find out more about the classes?"
}

export function amathEnquiryMessage() {
  return "Hi Teacher Peng Rong, I'm interested in O Level A-Math tuition at Tuition @ Pioneer. Could I find out more about the classes?"
}

export function mathEnquiryMessage() {
  return "Hi Tuition @ Pioneer, I'm interested in O Level Math tuition. Could I find out more about the classes?"
}

export function emathEnquiryMessage() {
  return "Hi Teacher Karen, I'm interested in O Level E-Math tuition at Tuition @ Pioneer. Could I find out more about the classes?"
}

export function lowerSecMathEnquiryMessage() {
  return "Hi Teacher Karen, I'm interested in Lower Secondary Math tuition (Sec 1 & 2) at Tuition @ Pioneer. Could I find out more about the classes?"
}

export function lowerSecScienceKarenEnquiryMessage() {
  return "Hi Teacher Karen, I'm interested in Lower Secondary Science tuition (Sec 1 & 2) at Tuition @ Pioneer. Could I find out more about the classes?"
}

export function lowerSecSciencePengRongEnquiryMessage() {
  return "Hi Teacher Peng Rong, I'm interested in Lower Secondary Science tuition (Sec 1 & 2) at Tuition @ Pioneer. Could I find out more about the classes?"
}

/** Teacher Karen — primary & secondary Math */
export const TEACHER_KAREN_PHONE = '6591850641'

export function openWhatsapp(message, { subject, pagePath, label, phone } = {}) {
  if (subject && typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      subject,
      page_path: pagePath || window.location.pathname,
      contact_method: 'whatsapp',
    })
  } else if (
    label &&
    typeof window !== 'undefined' &&
    typeof window.gtag === 'function'
  ) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: label,
    })
  }

  const url = buildWhatsappUrl(message, phone)
  window.open(url, '_blank', 'noopener,noreferrer')
}
