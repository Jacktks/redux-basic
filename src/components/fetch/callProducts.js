import axios from "axios";

function callProducts({
  valueTitle,
  valueType,
  valueByType,
  valueByBrand,
  valueByRatings,
  valueByPricesStart,
  valueByPricesEnd,
  sort,
  valueSearch,
}) {
  let url = `http://localhost:5000/products?`;

  if (valueTitle) {
    url += `&title=${valueTitle}`;
  }

  if (valueType) {
    url += `&type=${valueType}`;
  }

  if (valueByType.length > 0) {
    for (let i = 0; i < valueByType.length; i++) {
      url += `&byType=${valueByType[i]}`;
    }
  }

  if (valueByBrand.length > 0) {
    for (let i = 0; i < valueByBrand.length; i++) {
      url += `&brand=${valueByBrand[i]}`;
    }
  }

  if (valueByRatings) {
    url += `&ratings=${valueByRatings}`;
  }

  if (valueByPricesStart) {
    url += `&price_gte=${valueByPricesStart}`;
  }

  if (valueByPricesEnd) {
    url += `&price_lte=${valueByPricesEnd}`;
  }

  if (sort) {
    url += `&_sort=price&_order=${sort}`;
  }

  if (valueSearch) {
    url += `&q=${valueSearch}`;
  }

  return axios.get(url);
}

export default callProducts;
