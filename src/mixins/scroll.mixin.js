import M from 'materialize-css'
import store from '../store/index'

export default {

  async mounted() {

    const options = {
      throttle: 100,
      scrollOffset: window.innerHeight / 2,
      activeClass: 'active',
      getActiveElement(id) {
        store.dispatch('updateLinks', id)
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(elems, options);
    });
  },
}