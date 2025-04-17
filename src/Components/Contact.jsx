import React from 'react'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d43f7cc1-e01b-4366-9808-eb2e489b061f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='container mx-auto w-full overflow-hidden
    p-14 md:px-20 lg:px-32' id='contact'> 
        <h2 className='text-center text-2xl sm:text-4xl font-bold mb-2 text-[#cf0909]'>Contact    <span className='underline underline-offset-4 text-black decoration-1 under font-light'>With Us</span>
        </h2>
        <p className='text-[rgb(15_20_92)] max-w-80 text-center mx-auto mb-8'>Ready to Make a Move? Let’s Build Your Future Together
</p>

{/* form start */}

<form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
<div className='flex flex-wrap'>
<div className='w-full md:w-1/2 text-left'>Your Name
<input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="name" placeholder="Your Name" required  />

</div>
<div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
<input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="email" placeholder="Your Email" required />

</div>

</div>

<div className='my-6 text-left'>
<textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="message" placeholder="Message" required></textarea>
</div>

    <button type="submit" className='border-1 mx-auto text-center border-white px-6 py-3 bg-[rgb(15_15_15)] text-white rounded-full hover:bg-[brown] hover:text-[white]'>Send Message </button>
</form>


</div>
  );
};

export default Contact;