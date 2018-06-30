export const LOAD_ISSUES = 'LOAD_ISSUES'

export function loadIssues(data) {
   return {
      type: LOAD_ISSUES,
      data: data
   };
}