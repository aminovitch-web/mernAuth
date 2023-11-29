
export default function Form({ formName, fields, onSubmit, children }) {
    return (
      <form onSubmit={onSubmit} className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold">{formName}</h1>
        <hr className="mt-3"/>
        {fields.map((field, index) => (
          <div key={index} className="mt-3">
            <label htmlFor={field.id} className="block text-base mb-2">{field.label}</label>
            <input type={field.type} id={field.id} className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder={field.placeholder} />
          </div>
        ))}
        {children}
      </form>
    );
  }
  