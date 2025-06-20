package com.khepri.backend.dto;

import java.util.List;

public class WorkoutRequest {
    private List<String> goals;
    private List<String> equipment;
    private Integer timePerSession;
    private String primaryGoal;
    private String fitnessLevel;
    private List<String> schedule;

    // Getters and Setters
    public List<String> getGoals() { return goals; }
    public void setGoals(List<String> goals) { this.goals = goals; }

    public List<String> getEquipment() { return equipment; }
    public void setEquipment(List<String> equipment) { this.equipment = equipment; }

    public Integer getTimePerSession() { return timePerSession; }
    public void setTimePerSession(Integer timePerSession) { this.timePerSession = timePerSession; }

    public String getPrimaryGoal() { return primaryGoal; }
    public void setPrimaryGoal(String primaryGoal) { this.primaryGoal = primaryGoal; }

    public String getFitnessLevel() { return fitnessLevel; }
    public void setFitnessLevel(String fitnessLevel) { this.fitnessLevel = fitnessLevel; }

    public List<String> getSchedule() { return schedule; }
    public void setSchedule(List<String> schedule) { this.schedule = schedule; }

    @Override
    public String toString() {
        return "WorkoutRequest{" +
                "goals=" + goals +
                ", equipment=" + equipment +
                ", timePerSession=" + timePerSession +
                ", primaryGoal='" + primaryGoal + '\'' +
                ", fitnessLevel='" + fitnessLevel + '\'' +
                ", schedule=" + schedule +
                '}';
    }
}