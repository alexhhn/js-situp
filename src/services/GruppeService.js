import Api from "@/services/Api";

export default {
  getGrupper() {
    return Api().get("/gruppe");
  },

  addGruppe(gruppe) {
    return Api().post("/gruppe", gruppe);
  },

  endreGruppe(gruppe) {
    return Api().put("/gruppe/" + gruppe.name, gruppe);
  }
};
