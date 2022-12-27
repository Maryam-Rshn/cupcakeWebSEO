
export const state = () =>({
    products: []
})

export const mutations = {
    setProductData(state, productData) {
        state.products = productData.map(product => {
            return {
              slug: product.slug,
              id: product.id,
              title: product.attributes.title,
              content: product.attributes.content,
              imageUrl: product.attributes.image.data[0].attributes.formats.thumbnail.url,
            };
          });
    }
}


export const actions = {
    async getProductData({ commit }) {
      try{
        const url = 'http://localhost:1337/api/products?populate=*';
        const options = {
          method: "GET"
        }; 
        const response = await fetch(url, options);
        const json = await response.json();
        const content = json.data;
        commit("setProductData", content)
      } catch(error) {
        throw error
      }
  },
}  
