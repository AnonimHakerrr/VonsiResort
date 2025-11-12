using System.Collections.Generic;

namespace backend.DTOs.Subscriptions
{
    public class SubscriptionDto
    {
        public string? Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public decimal Price { get; set; }
        public int DurationDays { get; set; }
        public List<string> Features { get; set; } = new();
        public bool Popular { get; set; }
    }
}