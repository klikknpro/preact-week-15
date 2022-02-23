class Component {
  constructor() {
    //
  }
  setState() {
    // update-eli a state-et, es ujrarendereli az alkalmazast
  }
  actualRender() {
    const componentToRender = this.render();
    // a react fejlesztoi ezt mar megirtak, ugy, hogy a componentToRendert-t hasznalja
    // ez a function a DOM API-t hasznalja
  }
}

module.exports = { Component };
