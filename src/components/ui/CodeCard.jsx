import { motion } from 'framer-motion'

const lines = [
  { type: 'comment', text: '# AI Systems Developer' },
  { type: 'keyword', text: 'from', rest: ' cloud ', module: 'import', items: 'AWS, Azure, GCP' },
  { type: 'keyword', text: 'from', rest: ' ai ', module: 'import', items: 'LangChain, RAG' },
  { type: 'blank' },
  { type: 'var', key: 'developer', assign: true },
  { type: 'obj-start' },
  { type: 'field', key: '"name"', value: '"Rihan Sajeer"', color: 'syn-green' },
  { type: 'field', key: '"role"', value: '"AI / Backend Eng."', color: 'syn-green' },
  { type: 'field', key: '"exp"', value: '"2+"', comment: '# years', color: 'syn-orange' },
  { type: 'field', key: '"location"', value: '"UAE 🇦🇪"', color: 'syn-green' },
  { type: 'field', key: '"clouds"', value: '[AWS, Azure, GCP]', color: 'syn-teal' },
  { type: 'field', key: '"status"', value: '"available_now"', color: 'syn-green' },
  { type: 'obj-end' },
  { type: 'blank' },
  { type: 'print', text: '"Ready to build."' },
]

const colorMap = {
  'syn-green': '#A6E3A1',
  'syn-orange': '#FAB387',
  'syn-teal': '#94E2D5',
  'syn-purple': '#CBA6F7',
  'syn-blue': '#89B4FA',
}

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="bg-surface rounded-lg border border-border overflow-hidden shadow-2xl"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 bg-card border-b border-border">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-muted">rihan_sajeer.py</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-muted text-xs w-6 mr-4 text-right select-none pt-0.5 flex-shrink-0">
              {line.type !== 'blank' ? i + 1 : ''}
            </span>
            <span>
              {line.type === 'comment' && (
                <span className="text-muted italic">{line.text}</span>
              )}
              {line.type === 'keyword' && (
                <>
                  <span style={{ color: colorMap['syn-purple'] }}>{line.text}</span>
                  <span style={{ color: colorMap['syn-teal'] }}>{line.rest}</span>
                  <span style={{ color: colorMap['syn-purple'] }}>{line.module}</span>
                  <span className="text-text"> </span>
                  <span style={{ color: colorMap['syn-teal'] }}>{line.items}</span>
                </>
              )}
              {line.type === 'var' && (
                <>
                  <span style={{ color: colorMap['syn-blue'] }}>developer</span>
                  <span className="text-text"> = </span>
                </>
              )}
              {line.type === 'obj-start' && <span className="text-text">{'{'}</span>}
              {line.type === 'field' && (
                <span className="pl-4">
                  <span style={{ color: colorMap['syn-blue'] }}>{line.key}</span>
                  <span className="text-muted">: </span>
                  <span style={{ color: colorMap[line.color] }}>{line.value}</span>
                  <span className="text-text">,</span>
                  {line.comment && (
                    <span className="text-muted italic ml-2">{line.comment}</span>
                  )}
                </span>
              )}
              {line.type === 'obj-end' && <span className="text-text">{'}'}</span>}
              {line.type === 'print' && (
                <>
                  <span style={{ color: colorMap['syn-purple'] }}>print</span>
                  <span className="text-text">(</span>
                  <span style={{ color: colorMap['syn-green'] }}>{line.text}</span>
                  <span className="text-text">)</span>
                  <span className="text-text cursor-blink ml-0.5">▋</span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
