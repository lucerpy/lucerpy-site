const WHATSAPP_NUMBER = '5519936296268';
const DEFAULT_MESSAGE = 'Olá! Vim pelo site da Lucerpy e gostaria de saber mais sobre como vocês podem ajudar com a minha presença digital.';

export function buildWhatsAppUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
