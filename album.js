new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "1.jpg",
          img2: "2.jpg",
          img3: "3.jpg",
          title: "MEMORIES",
          isOpen: false,
        },
        {
          img1: "4.jpg",
          img2: "5.jpg",
          img3: "6.jpg",
          title: "MEMORIES",
          isOpen: false,
        },
        {
          img1: "7.jpg",
          img2: "8.jpg",
          img3: "10.jpg",
          title: "MEMORIES",
          isOpen: false,
        },
        {
          img1: "11.jpg",
          img2: "12.jpg",
          img3: "13.jpg",
          title: "MEMORIES",
          isOpen: false,
        },
        {
          img1: "14.jpg",
          img2: "15.jpg",
          img3: "16.jpg",
          title: "MEMORIES",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});

