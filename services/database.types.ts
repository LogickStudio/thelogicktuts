import type { AssessmentGrade } from "../types";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
        };
        Insert: {
          id: string;
          username: string;
        };
        Update: {
          id?: string;
          username?: string;
        };
      };
      lesson_progress: {
        Row: {
          user_id: string;
          lesson_id: string;
        };
        Insert: {
          user_id: string;
          lesson_id: string;
        };
        Update: {
          user_id?: string;
          lesson_id?: string;
        };
      };
      assessment_progress: {
        Row: {
          user_id: string;
          question_key: string;
          grade: AssessmentGrade;
          feedback: string;
          answer: string;
        };
        Insert: {
          user_id: string;
          question_key: string;
          grade: AssessmentGrade;
          feedback: string;
          answer: string;
        };
        Update: {
          user_id?: string;
          question_key?: string;
          grade?: AssessmentGrade;
          feedback?: string;
          answer?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
