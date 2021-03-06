// DOMAIN points to the host name where invoicer and lnd reside
export const DOMAIN = 'meedamian.ddns.net';

// following URLs define relevant Invoicer's API endpoints
export const PAYMENT_URL = '/api/payment';
export const INFO_URL = '/api/info';

// Used in Invoice descriptions, as well as header of the website
export const RECIPIENT = 'LNCM';

// Defines max allowed LN payment.  Max 2^32 millisatoshis per payment is
// currently defined in the spec
export const MAX_LN_PAYMENT = 2 ** 32 / 1e3; // = 4294967;

export const URL = 'http://meedamian.ddns.net:2048/api/info';
