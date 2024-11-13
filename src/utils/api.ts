import instance from "./instance";

export const apiSearchCompany = (keyword: string) => instance({
    url: `company/search?keyword=${keyword}`,
    method: 'get'
})