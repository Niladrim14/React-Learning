

        const taskForm = document.getElementById('task-form');
        const taskTitleInput = document.getElementById('task-title');
        const taskDetailsInput = document.getElementById('task-details');
        const taskGrid = document.getElementById('task-grid');

        // Listen for form submission
        taskForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const title = taskTitleInput.value.trim();
            const details = taskDetailsInput.value.trim();

            // Check if title is provided
            if (!title) {
                // A more user-friendly notification could be added here
                console.error("Task title is required.");
                return;
            }

            // Create a new task card and add it to the grid
            createTaskCard(title, details);

            // Clear the input fields
            taskForm.reset();
            taskTitleInput.focus();
        });

        // Function to create a new task card element
        function createTaskCard(title, details) {
            const card = document.createElement('div');
            card.className = 'bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col justify-between animate-fade-in';
            
            // Default details if none provided
            const displayDetails = details ? details : 'No details provided for this task.';

            card.innerHTML = `
                <div>
                    <h2 class="text-xl font-bold text-white mb-2">${escapeHTML(title)}</h2>
                    <p class="text-slate-400 text-sm mb-4">${escapeHTML(displayDetails)}</p>
                </div>
                <a href="#" class="text-blue-400 hover:underline font-medium text-sm self-start">Read More..</a>
            `;
            
            // Add the new card to the beginning of the grid
            taskGrid.prepend(card);
        }

        // Simple utility to escape HTML to prevent XSS
        function escapeHTML(str) {
            const div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        }

        // Add a simple fade-in animation for new cards
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
            }
        `;
        document.head.appendChild(style);