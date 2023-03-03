function url_curry (protocol) {
  return function (hostname, pathname) {
    return `${protocal}${hostname}${pathname}`;
  }
}

const url_https = url_curry('https://');

const url2 = url_https('www.williamhuang.com' , '/resource'); 
const url3 = url_https('www.williamhuang.com' , '/awesome');
const url4 = url_https('www.google.com' , '/codered');

console.log(url2, url3, url4);
