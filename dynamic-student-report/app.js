const studentArray = [
  { id: 1, name: "Ahmad", grade: 85 },
  { id: 2, name: "Mona", grade: 45 },
  { id: 3, name: "Khaled", grade: 72 },
  { id: 4, name: "Laila", grade: 90 },
  { id: 5, name: "Youssef", grade: 30 },
];

const reportsContainer=document.getElementById("studentReports");

for (let student of studentArray) {
    const status = student.grade >= 50 ? "Passed" : "Failed";
    const studentRep= `<div class="student-card">
            <h2>${student.name}</h2>

            <p><strong>ID:</strong> ${student.id}</p>

            <p><strong>Grade:</strong> ${student.grade}</p>

            <p class="status ${status === "Passed" ? "passed" : "failed"}">
                <strong>Status:</strong> ${status}
            </p>
        </div>
  `;
    reportsContainer.innerHTML += studentRep;
  
}
