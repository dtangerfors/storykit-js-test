import axios from "axios";

const updateGrade = async (input: any) => {
   // Get parent form
   const form = input.target.parentElement?.parentElement as HTMLFormElement;
   // Get formdata
   const formData = new FormData(form);
   const grade = Number(formData.get('grade'));
   const id = Number(formData.get('id'));

   // Make PUT-request with form data
   await axios.patch(`http://localhost:3000/videos/${id}/`, {
    id: id,
    grade: grade
   }).then(resp => {
      console.log(resp.data);
   }).catch(error => {
      console.log(error);
   });

   await console.log(`id: ${id}, grade: ${grade}`)
}

export {updateGrade}