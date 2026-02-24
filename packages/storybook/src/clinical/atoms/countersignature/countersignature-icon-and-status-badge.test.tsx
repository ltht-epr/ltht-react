import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ClinicalApprovalStatus } from '@ltht-react/types'
import CountersignatureIconAndStatusBadge from '@ltht-react/countersignature'

describe('CountersignatureIconAndStatusBadge', () => {
  describe('Rendering', () => {
    it('should render nothing when status is undefined', () => {
      const { container } = render(<CountersignatureIconAndStatusBadge />)
      expect(container.firstChild).toBeNull()
    })

    it('should render badge when status is provided', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)
      expect(screen.getByText('Countersignature Requested')).toBeInTheDocument()
    })
  })

  describe('Status Display Text', () => {
    it('should display correct text for Requested status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)
      expect(screen.getByText('Countersignature Requested')).toBeInTheDocument()
    })

    it('should display correct text for Reviewed status with completion details', () => {
      render(
        <CountersignatureIconAndStatusBadge
          status={ClinicalApprovalStatus.Reviewed}
          completedOnDisplay="2026-02-19 10:30"
          completedByDisplayName="Dr. Smith"
        />
      )
      expect(screen.getByText('Countersigned at 2026-02-19 10:30 by Dr. Smith')).toBeInTheDocument()
    })

    it('should display correct text for Cancelled status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Cancelled} />)
      expect(screen.getByText('Countersign Request Withdrawn')).toBeInTheDocument()
    })

    it('should display correct text for Expired status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Expired} />)
      expect(screen.getByText('Countersign Request Closed by system')).toBeInTheDocument()
    })

    it('should display correct text for Reviewed status with only completion date', () => {
      render(
        <CountersignatureIconAndStatusBadge
          status={ClinicalApprovalStatus.Reviewed}
          completedOnDisplay="2026-02-19 10:30"
        />
      )
      expect(screen.getByText('Countersigned at 2026-02-19 10:30')).toBeInTheDocument()
    })

    it('should display correct text for Reviewed status with only completed by name', () => {
      render(
        <CountersignatureIconAndStatusBadge
          status={ClinicalApprovalStatus.Reviewed}
          completedByDisplayName="Dr. Smith"
        />
      )
      expect(screen.getByText('Countersigned by Dr. Smith')).toBeInTheDocument()
    })

    it('should display correct text for Reviewed status with no completion details', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Reviewed} />)
      expect(screen.getByText('Countersigned')).toBeInTheDocument()
    })
  })

  describe('Background Colors', () => {
    it('should apply correct background color for Requested status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)
      const badge = screen.getByText('Countersignature Requested')
      expect(badge).toHaveStyle('background-color: #f35656')
    })

    it('should apply correct background color for Reviewed status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Reviewed} />)
      const badge = screen.getByText('Countersigned')
      expect(badge).toHaveStyle('background-color: #46eb34')
    })

    it('should apply correct background color for Cancelled status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Cancelled} />)
      const badge = screen.getByText('Countersign Request Withdrawn')
      expect(badge).toHaveStyle('background-color: #cfcaca')
    })

    it('should apply correct background color for Expired status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Expired} />)
      const badge = screen.getByText('Countersign Request Closed by system')
      expect(badge).toHaveStyle('background-color: #cfcaca')
    })
  })

  describe('Click Handling', () => {
    it('should call click handler when badge is clicked', () => {
      const mockClickHandler = jest.fn()
      render(
        <CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} clickHandler={mockClickHandler} />
      )

      const badge = screen.getByText('Countersignature Requested')
      fireEvent.click(badge)

      expect(mockClickHandler).toHaveBeenCalledTimes(1)
    })

    it('should not call click handler when no handler is provided', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)

      const badge = screen.getByText('Countersignature Requested')
      // Should not throw error when clicked without handler
      expect(() => fireEvent.click(badge)).not.toThrow()
    })
  })

  describe('Cursor Styling', () => {
    it('should have pointer cursor when click handler is provided', () => {
      const mockClickHandler = jest.fn()
      render(
        <CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} clickHandler={mockClickHandler} />
      )

      const badge = screen.getByText('Countersignature Requested')
      expect(badge).toHaveStyle('cursor: pointer')
    })

    it('should have default cursor when no click handler is provided', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)

      const badge = screen.getByText('Countersignature Requested')
      expect(badge).toHaveStyle('cursor: default')
    })
  })

  describe('Text Decoration', () => {
    it('should apply line-through decoration for Cancelled status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Cancelled} />)

      const badge = screen.getByText('Countersign Request Withdrawn')
      expect(badge).toHaveStyle('text-decoration: line-through')
    })

    it('should not apply line-through decoration for non-Cancelled status', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)

      const badge = screen.getByText('Countersignature Requested')
      expect(badge).toHaveStyle('text-decoration: none')
    })
  })

  describe('Title Attribute', () => {
    it('should set title attribute with display text', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Requested} />)

      const badge = screen.getByText('Countersignature Requested')
      expect(badge).toHaveAttribute('title', 'Countersignature Requested')
    })

    it('should set title attribute with completion details for Reviewed status', () => {
      render(
        <CountersignatureIconAndStatusBadge
          status={ClinicalApprovalStatus.Reviewed}
          completedOnDisplay="2026-02-19 10:30"
          completedByDisplayName="Dr. Smith"
        />
      )

      const badge = screen.getByText('Countersigned at 2026-02-19 10:30 by Dr. Smith')
      expect(badge).toHaveAttribute('title', 'Countersigned at 2026-02-19 10:30 by Dr. Smith')
    })

    it('should set title attribute for Reviewed status with partial completion details', () => {
      render(
        <CountersignatureIconAndStatusBadge
          status={ClinicalApprovalStatus.Reviewed}
          completedOnDisplay="2026-02-19 10:30"
        />
      )

      const badge = screen.getByText('Countersigned at 2026-02-19 10:30')
      expect(badge).toHaveAttribute('title', 'Countersigned at 2026-02-19 10:30')
    })

    it('should set title attribute for Reviewed status with no completion details', () => {
      render(<CountersignatureIconAndStatusBadge status={ClinicalApprovalStatus.Reviewed} />)

      const badge = screen.getByText('Countersigned')
      expect(badge).toHaveAttribute('title', 'Countersigned')
    })
  })
})
