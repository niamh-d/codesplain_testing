import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

it("should display the primary language of the repository", () => {
  const repository = {
    stargazers_count: 10,
    open_issues: 5,
    forks: 2,
    language: "JavaScript",
  };
  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("JavaScript");

  expect(language).toBeInTheDocument();
});
