package com.karan.Studentsystem.service;

import com.karan.Studentsystem.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public Iterable<Student> getAllStudents();
    public void delete(int id);
    public Student update(Student student,int id);
}
