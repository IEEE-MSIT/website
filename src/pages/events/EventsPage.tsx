import React, { useState, useMemo, useEffect } from 'react';
import { events } from '../../data/data';
import EventCard from '../../components/ui/EventCard';
import Hackathons from '../home/components/Hackathons';
import { ArrowLeft } from 'lucide-react';
import { HOME_PATH } from '../../constants/paths';
import { Link } from 'react-router-dom';
// import Hackathons from '../home/components/Hackathons';


const EventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const societies = useMemo(() => {
    const set = new Set<string>();
    const splitter = /\s*&\s*|\s*,\s*|\s+and\s+/i;
    events.forEach((e) => {
      const key = e.organisedBy || e.category || '';
      if (!key) return;
      const parts = key.split(splitter).map((p) => p.trim()).filter(Boolean);
      parts.forEach((p) => set.add(p));
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'All') return events;
    const splitter = /\s*&\s*|\s*,\s*|\s+and\s+/i;
    return events.filter((e) => {
      const key = e.organisedBy || e.category || '';
      if (!key) return false;
      const parts = key.split(splitter).map((p) => p.trim()).filter(Boolean);
      return parts.includes(activeFilter);
    });
  }, [activeFilter]);

  // Pagination
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);

  useEffect(() => {
    // reset to first page when filter or pageSize changes
    setPage(1);
  }, [activeFilter, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / pageSize));

  const paginatedEvents = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredEvents.slice(start, start + pageSize);
  }, [filteredEvents, page, pageSize]);

  return (
    <>
      <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              to={HOME_PATH}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Events & Workshops
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-black mb-6">All Events & Workshops</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore all our technical events, workshops, webinars, and hackathons. Stay updated and join us to learn, network, and grow your engineering career with IEEE MSIT.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {societies.map((soc) => (
                <button
                  key={soc}
                  onClick={() => setActiveFilter(soc)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 will-change-transform ${
                    activeFilter === soc
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:scale-105'
                  }`}
                >
                  {soc}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedEvents.map((event, idx) => (
              <div key={idx} className="h-full flex">
                <EventCard event={event} className="flex-1" />
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50"
                disabled={page === 1}
              >
                Prev
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-2 rounded-md text-sm ${page === i + 1 ? 'bg-primary text-white' : 'bg-white border border-gray-200'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50"
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Per page</label>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="border border-gray-200 rounded-md px-2 py-1"
              >
                {[6, 9, 12, 24].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-16">
            <Hackathons />
          </div>
        </div>
      </main>
    </>
  );
};

export default EventsPage;
