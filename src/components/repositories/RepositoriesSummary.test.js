import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

it("should display information about the repository", () => {
  const repository = {
    stargazers_count: 10,
    open_issues: 5,
    forks: 2,
    language: "JavaScript",
  };
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const val = repository[key];
    const el = screen.getByText(new RegExp(val));
    expect(el).toBeInTheDocument();
  }
});
