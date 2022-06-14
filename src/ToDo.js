export default class ToDo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  updateTitle(newTitle) { this.title = newTitle }
  updateDescription(newDescription) { this.description = newDescription }
  updateDueDate(newDueDate) { this.dueDate = newDueDate }


}