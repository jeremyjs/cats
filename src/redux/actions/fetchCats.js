import fetch from 'isomorphic-fetch';
import x2js from '../../lib/xml2json';
import { REQUEST_CATS, RECEIVE_CATS } from './actionTypes';

const xml2json = (new x2js()).xml2json;

const xmlFromStr = (str) => (new window.DOMParser()).parseFromString(str, "text/xml");
const aryFromNodeList = (nodeList) => {
  const res = [];
  for (const node of nodeList.values()) {
    res.push(node);
  }
  return res;
};
const catImgFromImageEl = (imageEl) => {
  const id = imageEl.querySelectorAll('id')[0];
  return ({
  _id: id.innerText,
  imgUrl: imageEl.querySelectorAll('url')[0].innerText,
})};
const catImg = ({ id, url }) => ({ _id: id, imgUrl: url });
const imgUrl = (obj) => obj.imgUrl;

const _fetchCats = () => (
  Promise.all([
    fetch(`http://mapd-cats.azurewebsites.net/catfacts`)
      .then(res => res.json())
      .then(json => {
        if (json.success !== 'true') {
          throw new Error('Error on fetch catfacts; response:', json);
        }
        return json.facts;
      }),
    fetch(`http://mapd-cats.azurewebsites.net/catpics`)
      .then(res => res.text())
      .then(text => {
        const xml = xmlFromStr(text);
        const json = xml2json(xml);
        const catImgs = json.response.data.images.image.map(catImg);
        return catImgs;
      }),
  ]).then(([ facts, catImgs ]) => {
    const imgUrls = catImgs.map(imgUrl);
    const cats = _.zip(facts, imgUrls).map(([ fact, imgUrl ]) => ({ fact, imgUrl }));
    return cats;
  })
);

const requestCats = () => ({
  type: REQUEST_CATS,
  payload: {},
});

const receiveCats = (cats) => ({
  type: RECEIVE_CATS,
  payload: {
    cats,
    catsReceivedAt: Date.now(),
  },
});

export const fetchCats = () => (dispatch) => {
  dispatch(requestCats());
  return _fetchCats().then((cats) => {
    console.log('cats:', cats);
    return dispatch(receiveCats(cats))
  });
};
