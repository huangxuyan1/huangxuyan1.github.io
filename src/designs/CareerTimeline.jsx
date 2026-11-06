import { useEffect, useRef, useState } from 'react'
import { education, experience, honors, projects, publications, research } from '../content'

/* Career figure laid out like the tracks of an audio editor: time runs left to right,
   each kind of work gets a track, and overlapping roles stack into extra lanes.
   Positions come from the `date` text in content.jsx, so editing an entry there moves its bar. */

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const toMonths = (year, month) => year * 12 + month

const today = new Date()
const NOW = toMonths(today.getFullYear(), today.getMonth()) + today.getDate() / 31
const WINDOW_START = toMonths(2023, 5)
const WINDOW_END = toMonths(2028, 6)

const percentAt = (months) => ((months - WINDOW_START) / (WINDOW_END - WINDOW_START)) * 100

/* Entries whose label would run into the next bar, so it ends at the bar's right edge instead. */
const LABEL_BEFORE_BAR = new Set(['campus'])

function parseMonths(date) {
  return [...date.matchAll(/([A-Z][a-z]{2}) (\d{4})/g)].map(([, month, year]) =>
    toMonths(Number(year), MONTHS.indexOf(month)),
  )
}

function toClip(entry) {
  const months = parseMonths(entry.date)
  return {
    ...entry,
    start: months[0],
    end: entry.date.includes('Present') ? NOW : months[months.length - 1] + 1,
  }
}

/* Places each clip in the first lane that is free when it starts. */
function toLanes(entries) {
  const clips = entries.map(toClip).sort((a, b) => a.start - b.start)
  const lanes = []
  for (const clip of clips) {
    const lane = lanes.find((candidate) => candidate[candidate.length - 1].end <= clip.start)
    if (lane) lane.push(clip)
    else lanes.push([clip])
  }
  return lanes
}

const TRACKS = [
  {
    id: 'education',
    label: 'Education',
    lanes: toLanes(education.map((entry) => ({ ...entry, title: entry.school }))),
  },
  { id: 'research', label: 'Research', lanes: toLanes(research) },
  { id: 'experience', label: 'Experience', lanes: toLanes(experience) },
  { id: 'projects', label: 'Projects', lanes: toLanes(projects) },
]

/* Single-date items. Markers close in time are nudged apart so each stays selectable;
   the caption always shows the real date. */
const MIN_MARKER_GAP_MONTHS = 1.1

const MARKERS = [
  ...publications.map((paper) => ({ ...paper, target: paper.id })),
  ...honors.map((honor) => ({ ...honor, target: 'honors' })),
]
  .filter((item) => parseMonths(item.date).length > 0)
  .map((item) => ({ ...item, at: parseMonths(item.date)[0] + 0.5 }))
  .sort((a, b) => a.at - b.at)
  .reduce((placed, item) => {
    const previous = placed[placed.length - 1]
    const at = previous ? Math.max(item.at, previous.at + MIN_MARKER_GAP_MONTHS) : item.at
    return [...placed, { ...item, at }]
  }, [])

const YEARS = [2024, 2025, 2026, 2027, 2028]

/* Ticks fall on calendar quarters (Jan, Apr, Jul, Oct), so every year line lands on a tick. */
const FIRST_QUARTER = Math.ceil(WINDOW_START / 3) * 3
const QUARTERS = Array.from(
  { length: Math.floor((WINDOW_END - FIRST_QUARTER) / 3) + 1 },
  (_, i) => FIRST_QUARTER + i * 3,
)

function Clip({ clip, hoverProps }) {
  const left = percentAt(clip.start)
  const isFuture = clip.end > NOW
  const elapsed = ((NOW - clip.start) / (clip.end - clip.start)) * 100
  return (
    <a
      className="tl-clip"
      href={`#${clip.id}`}
      style={{ left: `${left}%`, width: `${percentAt(clip.end) - left}%` }}
      aria-label={`${clip.title}, ${clip.date}`}
      {...hoverProps(clip)}
    >
      <span className={`tl-clip-label ${LABEL_BEFORE_BAR.has(clip.id) ? 'is-before' : ''}`}>
        {clip.short}
      </span>
      <span
        className={`tl-clip-bar ${isFuture ? 'has-future' : ''}`}
        style={isFuture ? { '--elapsed': `${Math.max(0, elapsed)}%` } : undefined}
      />
    </a>
  )
}

export default function CareerTimeline() {
  const [active, setActive] = useState(null)
  const scroller = useRef(null)

  /* On screens too narrow for the whole chart, start at recent work rather than 2023. */
  useEffect(() => {
    const el = scroller.current
    const head = el.querySelector('.tl-track-head').offsetWidth
    el.scrollLeft = (el.scrollWidth - head) * (percentAt(NOW) / 100) - (el.clientWidth - head) * 0.5
  }, [])

  const hoverProps = (item) => ({
    onMouseEnter: () => setActive(item),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(item),
    onBlur: () => setActive(null),
  })

  return (
    <figure className="tl-figure">
      <div className="tl-chart-scroll" ref={scroller}>
        <div className="tl-chart">
          <div className="tl-grid" aria-hidden="true">
            {YEARS.map((year) => (
              <span key={year} style={{ left: `${percentAt(toMonths(year, 0))}%` }} />
            ))}
          </div>

          <div className="tl-track tl-ruler" aria-hidden="true">
            <div className="tl-track-head" />
            <div className="tl-ruler-scale">
              {QUARTERS.map((month) => (
                <i key={month} style={{ left: `${percentAt(month)}%` }} />
              ))}
              {YEARS.map((year) => (
                <b key={year} style={{ left: `${percentAt(toMonths(year, 0))}%` }}>
                  {year}
                </b>
              ))}
            </div>
          </div>

          {TRACKS.map((track) => (
            <div key={track.id} className={`tl-track tl-c-${track.id}`}>
              <div className="tl-track-head">{track.label}</div>
              <div className="tl-lanes">
                {track.lanes.map((lane, i) => (
                  <div key={i} className="tl-lane">
                    {lane.map((clip) => (
                      <Clip key={clip.id} clip={clip} hoverProps={hoverProps} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="tl-track tl-c-milestones">
            <div className="tl-track-head">Milestones</div>
            <div className="tl-lanes">
              <div className="tl-lane tl-lane--markers">
                {MARKERS.map((item) => (
                  <a
                    key={item.title}
                    className="tl-marker"
                    href={`#${item.target}`}
                    style={{ left: `${percentAt(item.at)}%` }}
                    aria-label={`${item.title}, ${item.date}`}
                    {...hoverProps(item)}
                  >
                    <i />
                    {item.short && <span>{item.short}</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="tl-playhead" style={{ '--now': `${percentAt(NOW)}%` }} aria-hidden="true">
            <span>now</span>
          </div>
        </div>
      </div>

      <figcaption>
        <span className="tl-figure-number">Figure 1.</span>{' '}
        {active ? (
          <>
            <strong>{active.title}</strong>, {active.date}.
          </>
        ) : (
          <>
            Research, work, and projects over time. Select a bar or marker to jump to its entry.
            <span className="tl-swipe-hint"> Swipe sideways to see earlier years.</span>
          </>
        )}
      </figcaption>
    </figure>
  )
}
