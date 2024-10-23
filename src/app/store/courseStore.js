import { create } from "zustand";
import axios from "axios";

const useCourseStore = create((set) => ({
  course: null,
  courseTitle:null,
  error: null,
  categories: null,
  topics: null,
  quizContent: null,
  section: null,
  sectionsLoading: false,

  fetchCourse: async (id) => {
    set({ error: null, loading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}`
      );
      set({ course: response.data.data.course });      
    } catch (error) {
      set({ error: error.message });
    }
  },
  fetchCoursetitle : async (title) =>{
    set({ error: null, loading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRODUCTION_API}/course/courseTitle/${title}`
      );
      console.log(response);
      
      set({ course: response.data.data.course });      
    } catch (error) {
      set({ error: error.message });
    }
  },

  fetchSections: async (id) => {
    set({ error: null, sectionsLoading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}/course_sections`
      );
      set({ sections: response.data[0].sections });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ sectionsLoading: false });
    }
  },

  fetchCategories: async () => {
    set({ error: null, loading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/category`
      );
      set({ categories: response.data.result });
    } catch (error) {
      set({ error: error.message });
    }
  },

  fetchTopics: async () => {
    set({ error: null, loading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/topic`
      );
      set({ topics: response.data.result });
    } catch (error) {
      set({ error: error.message });
    }
  },

  fetchQuiz: async (id) => {
    set({ error: null, loading: true });
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/quizzes/${id}`
      );
      set({ quizContent: response.data.data });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default useCourseStore;
