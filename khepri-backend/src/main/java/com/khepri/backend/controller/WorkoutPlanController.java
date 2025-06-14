package com.khepri.backend.controller;

import com.khepri.backend.dto.WorkoutPlanRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workout")
@CrossOrigin(origins = "http://localhost:5173") // frontend dev URL
public class WorkoutPlanController {

    @PostMapping("/generate")
    public ResponseEntity<String> generateWorkout(@RequestBody WorkoutPlanRequest request) {
        System.out.println("Received workout plan request: " + request);
        return ResponseEntity.ok("Workout plan submitted successfully!");
    }
}