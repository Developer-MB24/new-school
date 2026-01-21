import React from "react";

const Careers = () => {
  return (
    <div className="w-full bg-white">
      {/* ================= Vacancies Section ================= */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-orange-500 mb-6">
          Vacancies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" placeholder="Enter Full Name" />
          <Input label="Email" placeholder="Enter Email" type="email" />

          <Input label="Mobile Number" placeholder="Enter Number" />
          <Input
            label="Expected Salary (per month)"
            placeholder="Enter Number"
          />

          <Input
            label="Years of Teaching Experience (School)"
            placeholder="Type NA if Not Applicable"
            full
          />

          <Input
            label="Years of Administrative/Coordination Experience"
            placeholder="Type NA if Not Applicable"
            full
          />

          <Textarea
            label="Your Vision for an Ideal School (max 50 words)"
            placeholder="Write briefly..."
            full
          />

          <Select
            label="Are you a resident of Noida?"
            options={["Yes", "No"]}
          />
          <Select
            label="Post Applying For?"
            options={["Teacher", "PRT", "TGT", "PGT", "Administrator"]}
          />

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Upload Resume
            </label>
            <input type="file" className="w-full border rounded-md px-3 py-2" />
          </div>
        </div>

        <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
          APPLY NOW →
        </button>
      </section>

      {/* ================= Quick Enquiry / Admission Form ================= */}
      <section className="border-t py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mb-2">
            QUICK ENQUIRY
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            NOTE: Mandatory fields are marked with{" "}
            <span className="text-red-500">*</span>
          </p>

          {/* Student Details */}
          <FormSection title="Student Details">
            <Input
              label="Student First Name *"
              placeholder="Enter First Name"
            />
            <Input label="Student Last Name *" placeholder="Enter Last Name" />
            <Input label="Student Date of Birth *" type="date" placeholder="" />
            <Select
              label="Previous Class *"
              options={["Nursery", "KG", "I", "II", "III"]}
            />
            <Select
              label="Applying For Class *"
              options={["Nursery", "KG", "I", "II", "III"]}
            />
            <Input
              label="Previous School *"
              placeholder="Enter Previous School"
            />
            <Select label="Student Gender *" options={["Male", "Female"]} />
            <Select
              label="Student Blood Group"
              options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+"]}
            />
            <Select
              label="Source Of Information *"
              options={["Website", "Friend", "Advertisement"]}
            />
            <Input label="Age As On 1st April" placeholder="Enter Age" />
          </FormSection>

          {/* Parents Details */}
          <FormSection title="Parents Details">
            <Input label="Father Name *" placeholder="Enter Father Name" />
            <Input label="Mother Name *" placeholder="Enter Mother Name" />
            <Input label="Father Mobile *" placeholder="Enter Mobile" />
            <Input label="Father Email" placeholder="Enter Email" />
            <Input label="Father Occupation" placeholder="Enter Occupation" />
            <Input label="Mother Occupation" placeholder="Enter Occupation" />
            <Input label="Mother Mobile *" placeholder="Enter Mobile" />
          </FormSection>

          {/* Sibling Details */}
          <FormSection title="Sibling Details">
            <Input label="Sibling No1 Name" />
            <Input label="Sibling No2 Name" />
            <Input label="Sibling No1 Class" />
            <Input label="Sibling No2 Class" />
          </FormSection>

          {/* Guardian & Address */}
          <FormSection title="Guardian Details">
            <Input label="Guardian Name" />
            <Input label="Relation With Candidate" />
          </FormSection>

          <FormSection title="Address">
            <Textarea label="Permanent Address *" full />
            <Textarea label="Address of Parents/Guardian" full />
          </FormSection>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 border rounded-md">Back</button>
            <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md font-semibold">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================= Reusable Components ================= */

const Input = ({ label, placeholder, type = "text", full }) => (
  <div className={full ? "md:col-span-2" : ""}>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

const Textarea = ({ label, placeholder, full }) => (
  <div className={full ? "md:col-span-2" : ""}>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <textarea
      rows="3"
      placeholder={placeholder}
      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select className="w-full border rounded-md px-3 py-2">
      <option>Select</option>
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  </div>
);

const FormSection = ({ title, children }) => (
  <>
    <h3 className="text-xl font-semibold text-blue-600 mt-10 mb-6">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </>
);

export default Careers;
