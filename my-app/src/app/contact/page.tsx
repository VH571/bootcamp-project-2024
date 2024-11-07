
export default function Contact() {
  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Name" 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Email" 
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}