import React from "react";

export default function MandatoryDisclosure() {
  return (
    <div className="bg-gray-50">
      {/* ===== Header (bg-primary) ===== */}
      <div className="bg-[#337ab7] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-10 text-center">
            <h2 className="text-3xl font-semibold mb-2">
              Mandatory Disclosure
            </h2>
            <p className="text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>{" "}
              <span className="mx-2">›</span>
              <span className="opacity-80">Mandatory Disclosure</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== Content ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {/* ===== GENERAL INFORMATION ===== */}
          <Section title="GENERAL INFORMATION">
            <Table
              headers={["S.No", "Information", "Details"]}
              rows={[
                ["1.", "NAME OF THE SCHOOL", "BLOOM INTERNATIONAL SCHOOL"],
                ["2.", "AFFILIATION NO.", "2132289"],
                ["3.", "SCHOOL CODE", "60948"],
                [
                  "4.",
                  "COMPLETE ADDRESS WITH PIN CODE",
                  "Techzone-VII, Near Roto Pumps Company, Noida Extension, Greater Noida (West)-203207",
                ],
                ["5.", "PRINCIPAL NAME", "Ms. SARLA RAINA BHAT"],
                ["6.", "PRINCIPAL QUALIFICATION", "M.A, M.ED"],
                [
                  "7.",
                  "SCHOOL EMAIL ID",
                  <a
                    href="mailto:bloominternationalschool@gmail.com"
                    className="text-blue-700 underline"
                  >
                    bloominternationalschool@gmail.com
                  </a>,
                ],
                ["8.", "CONTACT DETAILS", "9810625253 / 9891399253"],
              ]}
            />
          </Section>

          {/* ===== DOCUMENTS & INFORMATION ===== */}
          <Section title="DOCUMENTS AND INFORMATION">
            <Table
              headers={[
                "S.No",
                "DOCUMENTS / INFORMATION",
                "LINKS OF UPLOADED DOCUMENTS",
              ]}
              rows={[
                ["1.", "AFFILIATION / UPGRADATION LETTER", <DocLink />],
                ["2.", "SOCIETY / TRUST REGISTRATION CERTIFICATE", <DocLink />],
                ["3.", "NO OBJECTION CERTIFICATE (NOC)", ""],
                ["4.", "RECOGNITION CERTIFICATE UNDER RTE ACT", <DocLink />],
                ["5.", "BUILDING SAFETY CERTIFICATE", <DocLink />],
                ["6.", "FIRE SAFETY CERTIFICATE", <DocLink />],
                ["7.", "SELF CERTIFICATION", <DocLink />],
                ["8.", "WATER, HEALTH & SANITATION CERTIFICATE", <DocLink />],
              ]}
            />

            <p className="text-sm mt-4">
              <strong>NOTE:</strong> The school needs to upload self-attested
              copies of the above documents. If found non-genuine, action shall
              be taken as per norms.
            </p>
          </Section>

          {/* ===== RESULT & ACADEMICS ===== */}
          <Section title="RESULT AND ACADEMICS">
            <Table
              headers={["S.No", "DOCUMENTS / INFORMATION", "LINKS"]}
              rows={[
                ["1.", "FEE STRUCTURE", <DocLink />],
                ["2.", "ACADEMIC CALENDAR", <DocLink />],
                ["3.", "SCHOOL MANAGEMENT COMMITTEE", <DocLink />],
                ["4.", "PARENTS TEACHERS ASSOCIATION", <DocLink />],
                ["5.", "LAST THREE YEAR RESULT", <DocLink />],
              ]}
            />
          </Section>

          {/* ===== STAFF ===== */}
          <Section title="STAFF (TEACHING)">
            <Table
              headers={["S.No", "Information", "Details"]}
              rows={[
                ["1.", "PRINCIPAL", "Ms. SARLA RAINA BHAT"],
                ["2.", "PGT", "20"],
                ["3.", "TGT", "23"],
                ["4.", "PRT", "29"],
                ["5.", "TEACHER SECTION RATIO", "1 : 2.4"],
                ["6.", "SPECIAL EDUCATOR", "Ms Upma Gupta"],
                ["7.", "COUNSELLOR", "Ms Aditi Kapoor"],
              ]}
            />
          </Section>

          {/* ===== RESULT CLASS X ===== */}
          <Section title="RESULT : CLASS X">
            <Table
              headers={["Year", "Registered Students", "Passed", "Pass %"]}
              rows={[["2025", "219", "170", "77.62%"]]}
            />
          </Section>

          {/* ===== RESULT CLASS XII ===== */}
          <Section title="RESULT : CLASS XII">
            <Table
              headers={["Year", "Registered Students", "Passed", "Pass %"]}
              rows={[["2025", "132", "102", "77.27%"]]}
            />
          </Section>

          {/* ===== INFRASTRUCTURE ===== */}
          <Section title="SCHOOL INFRASTRUCTURE">
            <Table
              headers={["S.No", "Information", "Details"]}
              rows={[
                ["1.", "TOTAL CAMPUS AREA", "7868 Sq. Mtr"],
                ["2.", "CLASSROOMS", "600 sqft (20), 550 sqft (45)"],
                [
                  "3.",
                  "LABORATORIES",
                  "Maths, Physics, Biology, Chemistry, Computer Labs",
                ],
                ["4.", "INTERNET FACILITY", "Yes"],
                ["5.", "GIRLS TOILETS", "05"],
                ["6.", "BOYS TOILETS", "05"],
                [
                  "7.",
                  "INSPECTION VIDEO",
                  <a
                    href="https://www.youtube.com/watch?v=GFJkVax_rZ4"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 underline"
                  >
                    View on YouTube
                  </a>,
                ],
              ]}
            />
          </Section>
        </div>
      </section>
    </div>
  );
}

/* ===== Reusable Components ===== */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">{title}</h3>
      {children}
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-[#337ab7] text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="border px-3 py-2 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-100">
              {row.map((cell, j) => (
                <td key={j} className="border px-3 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocLink() {
  return (
    <a href="#" className="text-blue-700 underline">
      VIEW
    </a>
  );
}
