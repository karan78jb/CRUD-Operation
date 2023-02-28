package com.karan.Studentsystem.controller;

import com.karan.Studentsystem.model.Student;
import com.karan.Studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new Student is added";
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudent(){
        return (List<Student>) studentService.getAllStudents();
    }
    @DeleteMapping("/delete/{id}")
    public void deletestudent(@PathVariable int id){
        studentService.delete(id);
    }
    @PutMapping("/update/{id}")
    public Student updateBook(@RequestBody Student student, @PathVariable("id") int id){
        student=this.studentService.update(student,id);
        return student;
    }

}
