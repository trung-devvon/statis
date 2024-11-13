"use client";
import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { apiSearchCompany } from "@/utils/api";
import Link from "next/link";
import ROUTES from "@/utils/routes";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Debounce search term to avoid too many API calls
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Search handler
  React.useEffect(() => {
    const searchCompanies = async () => {
      if (!debouncedSearch.trim()) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const response: any = await apiSearchCompany(debouncedSearch);
        // Only set results if response is an array
        if (response.data) {
          setResults(response.data);
        }
        console.log(results);
      } catch (err) {
        // Just reset results on error, don't show error message
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    searchCompanies();
  }, [debouncedSearch]);
  return (
    <>
      <div className="w-full h-[350px]">
        <div
          style={{
            background: 'url("/image.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="flex justify-center items-center z-20 w-full h-full"
        >
          <div className="w-1/2 relative">
            <p className="text-xl text-blue-700 font-semibold text-center">
              Business Directory
            </p>
            <h1 className="my-10 text-center text-white text-2xl border-2 p-2 border-white bg-gray-500/10 font-bold">
              More than 1 million companies available on statichub
            </h1>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg focus:outline-none focus:shadow-md border-2 border-white focus:border-blue-400"
              placeholder="Enter taxCode, name company or number phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowDropdown(true)}
            />

            {/* Dropdown Results - Always show on focus */}
            {showDropdown && (
              <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-[220px] overflow-y-auto z-50 scrollbar-main scroll-smooth">
                {loading && (
                  <div className="p-4 text-center text-gray-600">
                    Searching...
                  </div>
                )}

                {!loading && results?.length === 0 && searchTerm && (
                  <div className="p-4 text-center text-gray-600">
                    No results found
                  </div>
                )}

                {!loading &&
                  results?.length > 0 &&
                  results.map((company: any) => (
                    <Link
                      href={`${ROUTES.BUSINESS_DIRECTORY}/${company.id}`}
                      key={company?.id}
                      className="block p-4 hover:bg-blue-500/10 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <h3 className="font-medium text-gray-800">
                        {company?.companyName}
                      </h3>
                      <div className="text-sm text-gray-600 mt-1">
                        <div>Tax Code: {company?.taxCode}</div>
                        <div>Phone: {company?.phoneNumber}</div>
                        <div className="truncate">
                          Address: {company?.address}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full">swdvsdv</div>
      </div>
    </>
  );
};

export default Search;
