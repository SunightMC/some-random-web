function showMe() {
  document.getElementById('drinksel').addEventListener('change', function () {
    var style = this.value == 1 ? 'block' : 'none';
    document.getElementById('option2').style.display = style;
  });
}
