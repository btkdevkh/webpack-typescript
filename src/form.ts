export const formData = (form: HTMLFormElement) => {
  const inputs = document.querySelectorAll('input');
  let values: {[props: string]: string} = {};

  inputs.forEach(input => {
    values[input.id] = input.value;
  })

  return values;
}
